/**
 * Golden Muga Silk Scratch-to-Reveal Card (Project 2 Assamese Experience)
 * Supports desktop mouse & mobile touch scratching without page scroll.
 * Uses Web Audio API for coin scratch sound and auspicious celebratory chime.
 */
(function(window) {
  'use strict';

  let scratchCanvas = null;
  let scratchCtx = null;
  let isScratching = false;
  let isScratched = false;
  let lastScratchPt = null;
  let scratchCheckThrottle = null;
  let audioCtx = null;

  // --------------------------------------------------------------------------
  // WEB AUDIO SOUND EFFECTS
  // --------------------------------------------------------------------------
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Coin scratch noise with bandpass filtering
  function playScratchSound() {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const bufferSize = Math.floor(ctx.sampleRate * 0.04);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800 + Math.random() * 600;
      filter.Q.value = 2.5;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // AudioContext policy fallback
    }
  }

  // Auspicious celebration chime
  function playAuspiciousChime() {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + idx * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.09 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.09);
        osc.stop(ctx.currentTime + idx * 0.09 + 0.65);
      });
    } catch (e) {
      // AudioContext policy fallback
    }
  }

  // --------------------------------------------------------------------------
  // CANVAS DRAWING & RESIZING
  // --------------------------------------------------------------------------
  function resizeScratchCanvas() {
    if (!scratchCanvas || !scratchCtx) return;
    const rect = scratchCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    scratchCanvas.width = rect.width * dpr;
    scratchCanvas.height = rect.height * dpr;
    scratchCtx.scale(dpr, dpr);
  }

  function drawScratchCover() {
    if (!scratchCanvas || !scratchCtx) return;
    const rect = scratchCanvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    scratchCtx.globalCompositeOperation = 'source-over';

    // Rich Assamese Muga-Gold Foil Gradient
    const goldGrad = scratchCtx.createLinearGradient(0, 0, w, h);
    goldGrad.addColorStop(0, '#c59b27');
    goldGrad.addColorStop(0.3, '#f59e0b');
    goldGrad.addColorStop(0.5, '#fef08a');
    goldGrad.addColorStop(0.7, '#d97706');
    goldGrad.addColorStop(1, '#8c6214');

    scratchCtx.fillStyle = goldGrad;
    scratchCtx.fillRect(0, 0, w, h);

    // Delicate woven silk texture overlay
    scratchCtx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    for (let i = 0; i < w; i += 4) {
      scratchCtx.fillRect(i, 0, 1.5, h);
    }
    for (let j = 0; j < h; j += 4) {
      scratchCtx.fillRect(0, j, w, 1.5);
    }

    // Decorative Kingkhap Diamond Watermark Pattern
    scratchCtx.strokeStyle = 'rgba(120, 53, 15, 0.22)';
    scratchCtx.lineWidth = 1.2;
    for (let x = 15; x < w; x += 32) {
      for (let y = 15; y < h; y += 32) {
        scratchCtx.beginPath();
        scratchCtx.moveTo(x, y - 10);
        scratchCtx.lineTo(x + 10, y);
        scratchCtx.lineTo(x, y + 10);
        scratchCtx.lineTo(x - 10, y);
        scratchCtx.closePath();
        scratchCtx.stroke();
      }
    }

    // Border Frame
    scratchCtx.strokeStyle = '#78350f';
    scratchCtx.lineWidth = 2.5;
    scratchCtx.strokeRect(4, 4, w - 8, h - 8);

    // Inner dashed gold line
    scratchCtx.strokeStyle = 'rgba(255, 255, 240, 0.65)';
    scratchCtx.lineWidth = 1;
    scratchCtx.setLineDash([6, 4]);
    scratchCtx.strokeRect(9, 9, w - 18, h - 18);
    scratchCtx.setLineDash([]);

    // Text on Cover (In English as requested)
    scratchCtx.textAlign = 'center';
    scratchCtx.textBaseline = 'middle';

    const mainTxt = 'SCRATCH TO REVEAL';
    const subTxt = 'Touch or drag across the golden card';

    scratchCtx.fillStyle = '#4a0d17';
    scratchCtx.font = 'bold 16px "Cinzel", "Playfair Display", Georgia, serif';
    scratchCtx.fillText(mainTxt, w / 2, h / 2 - 10);

    scratchCtx.fillStyle = '#7f1d1d';
    scratchCtx.font = '600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    scratchCtx.fillText(subTxt, w / 2, h / 2 + 13);

    // Sparkles neatly positioned on both sides
    const textW = scratchCtx.measureText(mainTxt).width;
    const sparkleOffset = (textW / 2) + 20;
    scratchCtx.font = '14px serif';
    scratchCtx.fillText('✨', (w / 2) - sparkleOffset, h / 2 - 10);
    scratchCtx.fillText('✨', (w / 2) + sparkleOffset, h / 2 - 10);

    isScratched = false;
    scratchCanvas.style.opacity = '1';
    scratchCanvas.style.pointerEvents = 'auto';

    const badge = document.getElementById('revealed-badge');
    if (badge) badge.style.display = 'none';
  }

  function getScratchCoords(e) {
    const rect = scratchCanvas.getBoundingClientRect();
    let cx, cy;
    if (e.touches && e.touches.length > 0) {
      cx = e.touches[0].clientX;
      cy = e.touches[0].clientY;
    } else {
      cx = e.clientX;
      cy = e.clientY;
    }
    return {
      x: cx - rect.left,
      y: cy - rect.top
    };
  }

  function performScratch(x, y) {
    if (!scratchCtx || isScratched) return;

    scratchCtx.globalCompositeOperation = 'destination-out';
    scratchCtx.beginPath();
    scratchCtx.arc(x, y, 22, 0, Math.PI * 2);
    scratchCtx.fill();

    if (lastScratchPt) {
      scratchCtx.lineWidth = 44;
      scratchCtx.lineCap = 'round';
      scratchCtx.lineJoin = 'round';
      scratchCtx.beginPath();
      scratchCtx.moveTo(lastScratchPt.x, lastScratchPt.y);
      scratchCtx.lineTo(x, y);
      scratchCtx.stroke();
    }
    lastScratchPt = { x, y };

    playScratchSound();

    if (!scratchCheckThrottle) {
      scratchCheckThrottle = setTimeout(() => {
        checkPercentage();
        scratchCheckThrottle = null;
      }, 160);
    }
  }

  function checkPercentage() {
    if (isScratched || !scratchCanvas || !scratchCtx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = scratchCanvas.width;
    const h = scratchCanvas.height;

    try {
      const imgData = scratchCtx.getImageData(0, 0, w, h);
      const data = imgData.data;

      let transparentPixels = 0;
      const step = 16 * Math.round(dpr);
      let totalSamples = 0;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const alpha = data[((y * w) + x) * 4 + 3];
          if (alpha < 64) transparentPixels++;
          totalSamples++;
        }
      }

      const ratio = transparentPixels / totalSamples;
      if (ratio > 0.38) {
        revealDatePermanently();
      }
    } catch (e) {
      // Fallback
    }
  }

  function revealDatePermanently() {
    isScratched = true;
    scratchCanvas.style.transition = 'opacity 0.6s ease';
    scratchCanvas.style.opacity = '0';
    scratchCanvas.style.pointerEvents = 'none';

    const badge = document.getElementById('revealed-badge');
    if (badge) badge.style.display = 'inline-block';

    playAuspiciousChime();
  }

  function attachScratchListeners() {
    // Mouse Listeners
    scratchCanvas.addEventListener('mousedown', (e) => {
      isScratching = true;
      const pt = getScratchCoords(e);
      performScratch(pt.x, pt.y);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isScratching) return;
      const pt = getScratchCoords(e);
      performScratch(pt.x, pt.y);
    });

    window.addEventListener('mouseup', () => {
      isScratching = false;
      lastScratchPt = null;
    });

    // Touch Listeners (Prevent scroll while scratching on mobile)
    scratchCanvas.addEventListener('touchstart', (e) => {
      isScratching = true;
      const pt = getScratchCoords(e);
      performScratch(pt.x, pt.y);
      if (e.cancelable) e.preventDefault();
    }, { passive: false });

    scratchCanvas.addEventListener('touchmove', (e) => {
      if (!isScratching) return;
      const pt = getScratchCoords(e);
      performScratch(pt.x, pt.y);
      if (e.cancelable) e.preventDefault();
    }, { passive: false });

    scratchCanvas.addEventListener('touchend', () => {
      isScratching = false;
      lastScratchPt = null;
    });
  }

  function initScratchCard() {
    scratchCanvas = document.getElementById('scratch-canvas');
    if (!scratchCanvas) return;
    scratchCtx = scratchCanvas.getContext('2d');

    resizeScratchCanvas();
    drawScratchCover();
    attachScratchListeners();

    // Reset button
    const resetBtn = document.getElementById('scratch-reset-btn') || document.getElementById('btn-scratch-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resizeScratchCanvas();
        drawScratchCover();
      });
    }

    // Responsive window resize
    window.addEventListener('resize', () => {
      if (!isScratched) {
        resizeScratchCanvas();
        drawScratchCover();
      }
    });

    // Language switch
    window.addEventListener('wedding:languageChanged', () => {
      if (!isScratched) {
        drawScratchCover();
      }
    });
  }

  window.WeddingApp = window.WeddingApp || {};
  window.WeddingApp.initScratchCard = initScratchCard;
  window.WeddingApp.playScratchSound = playScratchSound;
  window.WeddingApp.playAuspiciousChime = playAuspiciousChime;
})(window);
