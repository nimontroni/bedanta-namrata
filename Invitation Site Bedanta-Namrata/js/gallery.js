/**
 * Wedding Photo Gallery Lightbox Controller
 * Supports responsive grid, fullscreen lightbox modal, keyboard navigation and touch gestures
 */
(function(window) {
  'use strict';

  function initGallery(galleryData) {
    const modal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!modal || !lightboxImg) return;

    const items = (galleryData && galleryData.items) ? galleryData.items.filter(i => i.enabled !== false) : [];
    let currentIndex = 0;

    function openLightbox(index) {
      if (index < 0 || index >= items.length) return;
      currentIndex = index;
      const item = items[currentIndex];
      const lang = (window.WeddingApp && window.WeddingApp.currentLang) || 'as';

      lightboxImg.src = item.url;
      lightboxCaption.textContent = lang === 'as' ? (item.captionAs || '') : (item.captionEn || item.captionAs || '');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % items.length;
      openLightbox(currentIndex);
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      openLightbox(currentIndex);
    }

    galleryItems.forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.index, 10);
        openLightbox(idx);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });

    // Touch swipe support
    let touchStartX = 0;
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) showNext();
        else showPrev();
      }
    }, { passive: true });
  }

  window.WeddingApp = window.WeddingApp || {};
  window.WeddingApp.initGallery = initGallery;
})(window);
