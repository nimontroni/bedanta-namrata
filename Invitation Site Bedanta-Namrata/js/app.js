/**
 * Master Application Orchestrator — Bedanta & Namrata Assamese Wedding Invitation
 * Integrates Project 1 Envelope, Music, & Our Story with Project 2 Assamese Identity.
 */
(function(window) {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Resolve content data bundle (from JSON or fallback)
    const contentData = window.__WEDDING_CONTENT_FALLBACK__ || null;

    // 2. Initialize Envelope opening screen (Project 1 experience)
    if (window.WeddingEnvelope && window.WeddingEnvelope.init) {
      window.WeddingEnvelope.init();
    }

    // 3. Initialize Background Music Controller (Project 1 experience)
    const musicSrc = (contentData && contentData.music && contentData.music.src)
      ? contentData.music.src
      : 'assets/audio/theme2_alokhua.mp3';

    if (window.WeddingMusic && window.WeddingMusic.init) {
      window.WeddingMusic.init(musicSrc);
    }

    // 4. Initialize Countdown timer (Target: 24th February, 2027)
    let targetDate = (contentData && contentData.countdown && contentData.countdown.targetDate)
      ? contentData.countdown.targetDate
      : '2027-02-24T00:00:00+05:30';

    if (typeof targetDate === 'string' && targetDate.includes('2026')) {
      targetDate = targetDate.replace('2026', '2027');
    }

    if (window.WeddingApp && window.WeddingApp.initCountdown) {
      window.WeddingApp.initCountdown(targetDate);
    }

    // 5. Initialize Scratch-to-Reveal Date Card (Project 2 Assamese Muga surface)
    if (window.WeddingApp && window.WeddingApp.initScratchCard) {
      window.WeddingApp.initScratchCard();
    }

    // 6. Initialize Our Story Section (Project 1 timeline, hidden until button click)
    if (window.WeddingApp && window.WeddingApp.initStory) {
      window.WeddingApp.initStory(contentData ? contentData.story : null);
    }

    // 7. Initialize Bilingual System (Assamese primary)
    if (window.WeddingApp && window.WeddingApp.initI18n) {
      window.WeddingApp.initI18n('as');
    }
  });

})(window);
