/**
 * Our Story Section Controller — স্মৃতিৰ এমুঠি (Project 1 Integration)
 * Initially hidden until user clicks "আমাৰ প্ৰেমৰ যাত্ৰা" button.
 * Preserves connected journey timeline, Facebook connection milestone, and elegant animations.
 */
(function(window) {
  'use strict';

  const defaultMilestones = [
    {
      id: 'milestone-1',
      order: 1,
      image: 'assets/images/story/first_connection.png',
      titleAs: 'ফেচবুকত প্ৰথম চিনাকী',
      titleEn: 'Facebook Brought Us Together',
      isFacebook: true
    },
    {
      id: 'milestone-2',
      order: 2,
      image: 'assets/images/story/getting_to_know.png',
      titleAs: 'হৃদয়ৰ পৰা হৃদয়লৈ',
      titleEn: 'From Heart to Heart',
      isFacebook: false
    },
    {
      id: 'milestone-3',
      order: 3,
      image: 'assets/images/story/first_meet.png',
      titleAs: 'প্ৰথম লগপোৱা',
      titleEn: 'From Screen to Reality',
      isFacebook: false
    },
    {
      id: 'milestone-4',
      order: 4,
      image: 'assets/images/story/love_begin.png',
      titleAs: 'হিয়াৰ গভীৰতাত ভালপোৱাৰ অঙ্কুৰণ',
      titleEn: 'And Then, We Fell in Love',
      isFacebook: false
    },
    {
      id: 'milestone-5',
      order: 5,
      image: 'assets/images/story/proposal.png',
      titleAs: 'একেলগে ডাঙৰ হ\'লো',
      titleEn: 'Growing Together',
      isFacebook: false
    },
    {
      id: 'milestone-6',
      order: 6,
      image: 'assets/images/story/infinite.png',
      titleAs: 'প্ৰতিশ্ৰুতি চিৰদিনৰ',
      titleEn: 'From Us to Forever',
      isFacebook: false
    }
  ];

  const assameseDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  function toAssameseNumber(num) {
    const padded = String(num).padStart(2, '0');
    return padded.replace(/[0-9]/g, d => assameseDigits[+d]);
  }

  function renderMilestones(container, milestones) {
    if (!container) return;
    container.innerHTML = '';

    const currentLang = (window.WeddingApp && window.WeddingApp.currentLang) || 'as';

    milestones.forEach((m, idx) => {
      const orderNum = m.order || (idx + 1);
      const isFinal = (orderNum === milestones.length);
      const isFacebook = (orderNum === 1) || (m.id === 'milestone-1') ||
        (m.titleEn && m.titleEn.toLowerCase().includes('facebook')) ||
        (m.titleAs && m.titleAs.includes('ফেচবুক'));

      const item = document.createElement('div');
      item.className = 'story-item' + (isFinal ? ' final-story' : '');

      const numStrAs = toAssameseNumber(orderNum);
      const numStrEn = String(orderNum).padStart(2, '0');
      const numDisplay = currentLang === 'as' ? numStrAs : numStrEn;

      const titleDisplay = currentLang === 'as' ? (m.titleAs || '') : (m.titleEn || '');

      const fbBadgeHtml = isFacebook
        ? `<div class="story-facebook-badge">
             <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right:4px;">
               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
             </svg>
             <span>${currentLang === 'as' ? 'ফেচবুকৰ সংযোগ' : 'Facebook Connection'}</span>
           </div>`
        : '';

      const heartIcon = isFinal ? '♥' : '♡';

      item.innerHTML = `
        <div class="story-connector">
          <span class="story-connector-node">${heartIcon}</span>
        </div>
        <div class="story-card-body">
          <div class="story-image">
            <img src="${m.image}" alt="${titleDisplay}" loading="lazy">
          </div>
          <div class="story-content">
            <div class="story-meta-row">
              <span class="story-number" data-i18n-as="${numStrAs}" data-i18n-en="${numStrEn}">${numDisplay}</span>
              ${fbBadgeHtml}
            </div>
            <h3 class="story-item-title" data-i18n-as="${m.titleAs || ''}" data-i18n-en="${m.titleEn || ''}">${titleDisplay}</h3>
          </div>
        </div>
      `;

      container.appendChild(item);
    });
  }

  function initStory(storyData) {
    const expandBtn = document.getElementById('story-expand-btn');
    const storySection = document.getElementById('story-section');
    const container = document.getElementById('story-timeline-container');

    if (!expandBtn || !storySection) {
      console.warn('[WeddingApp] Story button or section missing from DOM');
      return;
    }

    let isExpanded = false;
    const rawMilestones = (storyData && storyData.milestones && storyData.milestones.length > 0)
      ? storyData.milestones
      : defaultMilestones;

    // Filter enabled milestones if flagged
    const milestones = rawMilestones.filter(m => m.enabled !== false);

    // Initial render of items
    renderMilestones(container, milestones);

    // Click handler for "আমাৰ প্ৰেমৰ যাত্ৰা" button
    expandBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isExpanded = !isExpanded;

      const currentLang = (window.WeddingApp && window.WeddingApp.currentLang) || 'as';
      const btnText = expandBtn.querySelector('.story-btn-text');
      const btnArrow = expandBtn.querySelector('.story-btn-arrow');

      if (isExpanded) {
        // Show the story section
        storySection.style.display = 'block';
        storySection.removeAttribute('aria-hidden');
        storySection.setAttribute('aria-expanded', 'true');
        storySection.classList.add('revealed');
        storySection.classList.add('story-revealed');
        expandBtn.classList.add('active');
        expandBtn.setAttribute('aria-expanded', 'true');

        if (btnArrow) btnArrow.textContent = '↑';
        if (btnText) {
          btnText.textContent = currentLang === 'as' ? 'আমাৰ প্ৰেমৰ যাত্ৰা (বন্ধ কৰক)' : 'Our Story (Close)';
        }

        // Smooth scroll to story section
        setTimeout(() => {
          storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
      } else {
        // Hide the story section
        storySection.classList.remove('revealed');
        storySection.classList.remove('story-revealed');
        storySection.style.display = 'none';
        storySection.setAttribute('aria-hidden', 'true');
        storySection.setAttribute('aria-expanded', 'false');
        expandBtn.classList.remove('active');
        expandBtn.setAttribute('aria-expanded', 'false');

        if (btnArrow) btnArrow.textContent = '↓';
        if (btnText) {
          btnText.textContent = currentLang === 'as' ? 'আমাৰ প্ৰেমৰ যাত্ৰা' : 'Our Story';
        }

        // Smooth scroll back to button
        expandBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    // Language switch listener
    window.addEventListener('wedding:languageChanged', () => {
      renderMilestones(container, milestones);
      const currentLang = (window.WeddingApp && window.WeddingApp.currentLang) || 'as';
      const btnText = expandBtn.querySelector('.story-btn-text');
      if (btnText) {
        if (isExpanded) {
          btnText.textContent = currentLang === 'as' ? 'আমাৰ প্ৰেমৰ যাত্ৰা (বন্ধ কৰক)' : 'Our Story (Close)';
        } else {
          btnText.textContent = currentLang === 'as' ? 'আমাৰ প্ৰেমৰ যাত্ৰা' : 'Our Story';
        }
      }
    });
  }

  window.WeddingApp = window.WeddingApp || {};
  window.WeddingApp.initStory = initStory;
})(window);
