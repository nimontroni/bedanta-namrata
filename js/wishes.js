/**
 * Guest Wishes Wall Controller (Project 2 Assamese Experience)
 * Manages guest blessings with localStorage persistence and interactive feed rendering.
 */
(function(window) {
  'use strict';

  const STORAGE_KEY = 'bn_wedding_wishes';

  const defaultWishes = [
    {
      name: 'শইকীয়া পৰিয়ালবৰ্গ',
      nameEn: 'Saikia Families',
      date: 'ফাগুণ, ২০২৭',
      dateEn: 'February, 2027',
      message: 'বেদান্ত আৰু নম্ৰতালৈ শুভ বিবাহৰ আন্তৰিক ওলগ আৰু মনভৰা আশীৰ্বাদ জনালোঁ। তোমালোকৰ জীৱন সদায় সুখ, শান্তি আৰু সমৃদ্ধিৰে উপচি পৰক।',
      messageEn: 'Sending our heartfelt blessings and warm wishes to Bedanta & Namrata. May your married life be filled with boundless joy, peace, and prosperity.'
    },
    {
      name: 'হিৰণ্য আৰু ৰশ্মি ডেকা',
      nameEn: 'Hiranya & Rashmi Deka',
      date: 'ফাগুণ, ২০২৭',
      dateEn: 'February, 2027',
      message: 'নৱদম্পতীৰ পৱিত্ৰ দাম্পত্য জীৱন মধুৰ আৰু আনন্দময় হওক। তোমালোক দুয়ো সদায় এনেদৰেই হাঁহি-মুখে সুখেৰে থাকা।',
      messageEn: 'May the sacred union of Bedanta and Namrata be blissful, harmonious, and forever blessed with love.'
    }
  ];

  function getStoredWishes() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read wishes from localStorage', e);
    }
    return defaultWishes;
  }

  function saveWishes(wishes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (e) {
      console.warn('Could not save wishes to localStorage', e);
    }
  }

  function renderWishes(feedEl, wishes) {
    if (!feedEl) return;
    feedEl.innerHTML = '';

    const currentLang = (window.WeddingApp && window.WeddingApp.currentLang) || 'as';

    wishes.forEach(w => {
      const card = document.createElement('div');
      card.className = 'wish-item-card';

      const displayName = (currentLang === 'en' && w.nameEn) ? w.nameEn : w.name;
      const displayDate = (currentLang === 'en' && w.dateEn) ? w.dateEn : w.date;
      const displayMsg = (currentLang === 'en' && w.messageEn) ? w.messageEn : w.message;

      card.innerHTML = `
        <div class="wish-item-header">
          <div class="wish-item-author">
            <span class="wish-item-avatar">👤</span>
            <strong class="wish-item-name">${escapeHtml(displayName)}</strong>
          </div>
          <span class="wish-item-date">${escapeHtml(displayDate)}</span>
        </div>
        <p class="wish-item-body">${escapeHtml(displayMsg)}</p>
      `;

      feedEl.appendChild(card);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function initWishes() {
    const form = document.getElementById('wish-form');
    const senderInput = document.getElementById('wish-sender') || document.getElementById('wish-name-input');
    const msgInput = document.getElementById('wish-message') || document.getElementById('wish-msg-input');
    const feedEl = document.getElementById('wishes-feed') || document.getElementById('wishes-list');

    const wishes = getStoredWishes();
    renderWishes(feedEl, wishes);

    if (form && senderInput && msgInput) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const sender = senderInput.value.trim();
        const msg = msgInput.value.trim();

        if (!sender || !msg) return;

        const currentLang = (window.WeddingApp && window.WeddingApp.currentLang) || 'as';
        const nowStrAs = 'ফাগুণ, ২০২৭';
        const nowStrEn = 'February, 2027';

        const newWish = {
          name: sender,
          nameEn: sender,
          date: nowStrAs,
          dateEn: nowStrEn,
          message: msg,
          messageEn: msg
        };

        wishes.unshift(newWish);
        saveWishes(wishes);
        renderWishes(feedEl, wishes);

        senderInput.value = '';
        msgInput.value = '';

        if (window.WeddingApp && window.WeddingApp.playAuspiciousChime) {
          window.WeddingApp.playAuspiciousChime();
        }

        // Feedback toast or highlight
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = '✨ বাৰ্তা প্ৰেৰণ হ’ল!';
          submitBtn.disabled = true;
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 2000);
        }
      });
    }

    // Language switch listener
    window.addEventListener('wedding:languageChanged', () => {
      renderWishes(feedEl, wishes);
    });
  }

  window.WeddingApp = window.WeddingApp || {};
  window.WeddingApp.initWishes = initWishes;
})(window);
