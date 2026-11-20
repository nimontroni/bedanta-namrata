/**
 * Envelope Opening Controller (Project 1 Integration)
 * Handles 3D Assamese envelope opening transition, music launch, and unlock
 */
(function(window) {
  'use strict';

  function initEnvelope() {
    const screen = document.getElementById('envelope-screen');
    const openBtn = document.getElementById('open-invitation-btn');
    const waxSeal = document.getElementById('wax-seal-btn');

    if (!screen) return;

    document.documentElement.classList.add('envelope-active');
    document.body.classList.add('envelope-active');

    function openEnvelope() {
      if (screen.classList.contains('opening')) return;

      screen.classList.add('opening');

      // Trigger Project 1 background music on this explicit user interaction
      if (window.WeddingMusic && window.WeddingMusic.play) {
        window.WeddingMusic.play();
      }

      setTimeout(() => {
        screen.classList.add('hide');
        document.documentElement.classList.remove('envelope-active');
        document.body.classList.remove('envelope-active');
        document.body.classList.add('invitation-opened');

        // Scroll gracefully to top of hero stage
        const hero = document.getElementById('hero');
        if (hero) {
          hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Dispatch opened event
        window.dispatchEvent(new CustomEvent('wedding:envelopeOpened'));
      }, 1600);
    }

    if (openBtn) {
      openBtn.addEventListener('click', openEnvelope);
    }

    if (waxSeal) {
      waxSeal.addEventListener('click', openEnvelope);
    }
  }

  window.WeddingEnvelope = { init: initEnvelope };
})(window);
