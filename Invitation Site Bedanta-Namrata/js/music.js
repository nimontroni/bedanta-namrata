/**
 * Background Music Controller (Project 1 Integration)
 * Audio Asset: theme2_alokhua.mp3
 * Handles playback, volume fade-in, user toggling, and autoplay policy compliance.
 */
(function(window) {
  'use strict';

  let audioEl = null;
  let isPlaying = false;
  let toggleBtn = null;
  let musicWaves = null;

  function initMusic(audioSrc) {
    audioEl = document.getElementById('bg-audio');
    toggleBtn = document.getElementById('music-toggle-btn');
    musicWaves = document.getElementById('music-waves');

    if (!audioEl) {
      audioEl = new Audio(audioSrc || 'assets/audio/theme2_alokhua.mp3');
      audioEl.id = 'bg-audio';
      audioEl.loop = true;
      audioEl.preload = 'auto';
      document.body.appendChild(audioEl);
    }

    audioEl.volume = 0;

    // Check user preference from storage
    const savedPref = localStorage.getItem('wedding_music');
    if (savedPref === 'off') {
      isPlaying = false;
      updateUI(false);
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleMusic);
    }
  }

  function playMusic() {
    if (!audioEl) return;
    
    // User preference check
    const savedPref = localStorage.getItem('wedding_music');
    if (savedPref === 'off') return;

    audioEl.play().then(() => {
      isPlaying = true;
      updateUI(true);
      fadeInVolume();
      localStorage.setItem('wedding_music', 'on');
    }).catch(err => {
      console.log('Autoplay waiting for user gesture:', err);
      isPlaying = false;
      updateUI(false);
    });
  }

  function pauseMusic() {
    if (!audioEl) return;
    isPlaying = false;
    audioEl.pause();
    updateUI(false);
    localStorage.setItem('wedding_music', 'off');
  }

  function toggleMusic() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  function fadeInVolume() {
    if (!audioEl) return;
    let vol = 0;
    const targetVol = 0.55;
    const interval = setInterval(() => {
      vol += 0.05;
      if (vol >= targetVol) {
        vol = targetVol;
        clearInterval(interval);
      }
      audioEl.volume = vol;
    }, 100);
  }

  function updateUI(playing) {
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
      if (playing) {
        toggleBtn.classList.add('playing');
      } else {
        toggleBtn.classList.remove('playing');
      }
    }
    if (musicWaves) {
      if (playing) {
        musicWaves.classList.add('active');
      } else {
        musicWaves.classList.remove('active');
      }
    }
  }

  window.WeddingMusic = {
    init: initMusic,
    play: playMusic,
    pause: pauseMusic,
    toggle: toggleMusic,
    isPlaying: () => isPlaying
  };
})(window);
