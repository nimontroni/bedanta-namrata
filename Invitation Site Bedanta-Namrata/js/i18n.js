/**
 * Bilingual System (Assamese Primary / English Optional)
 * Strictly preserves Project 2's exact Assamese texts and provides accurate English translations.
 * Groom ALWAYS FIRST: Bedanta Saikia & Namrata Saikia.
 */
(function(window) {
  'use strict';

  const i18n = {
    as: {
      siteTitle: 'বেদান্ত আৰু নম্ৰতাৰ শুভ বিবাহ | Bedanta & Namrata Wedding Invitation',
      auspiciousTag: '॥ শ্ৰী শ্ৰী প্ৰজাপতয়ে নমঃ ॥',
      heroSub: 'নিমন্ত্ৰণী শৰাই',
      heroTitle: 'বেদান্ত আৰু নম্ৰতা',
      heroGroom: 'Bedanta',
      heroBride: 'Namrata',
      heroDatePill: '১১ ফাগুণ (24th February, 2027)',
      announcementLine1: 'আঘোণৰ সোণালী পথাৰখনৰ দৰে বুকুৰ একোণত থকা সপোনটোৱেও আজি থনধৰি উঠিছে।',
      announcementHighlight: 'মাৰ মেখেলা চাদৰ গাত মেৰিয়াই কইনা হোৱা সেই সৰু ছোৱালীজনী আজি সঁচাকৈয়ে কইনা হ’বলৈ ওলাইছো।',
      cdHeader: '⏳ শুভ বিবাহলৈ বাকী সময়',
      days: 'দিন',
      hours: 'ঘণ্টা',
      mins: 'মিনিট',
      secs: 'ছেকেণ্ড',
      invitationIntro: 'অগ্নী-সাক্ষী কৰি সাটো জনমৰ দোলেৰে বান্ধ খাই সমাজৰ আগত মোৰ সেই বিশেষ গৰাকীক অৰ্ধাঙ্গিনি ৰূপে পৰিচয় কৰাই দিবলৈ আগবাঢ়িছো অহা <span class="card-date-highlight">১১ ফাগুণ (24th February, 2027) বুধবাৰে।</span>',
      invitationReception: 'সেই উপলক্ষে আমাৰ এই মধুময় ক্ষণটিত ৰাইজ আৰু আত্মীয়ৰ একাঁজলী আশীৰ্বাদ বিচাৰি অহা <span class="card-date-highlight">১৩ ফাগুণ (26th February, 2027) শুক্ৰবাৰে</span> এভাগি অভ্যৰ্থনাৰ আয়োজন কৰিছো।',
      scratchEyebrow: 'শুভ দিন উন্মোচন',
      scratchTitle: 'মুগা পাটত <em>ঘঁহি চাওক</em>',
      scratchDesc: 'সোণালী মুগা পাটৰ ওপৰত আঙুলি চলাই বিবাহৰ দিন উন্মোচন কৰক',
      scratchCoverText: 'SCRATCH TO REVEAL',
      revealedDateTitle: '24th February, 2027',
      revealedDateSub: 'Wedding Ceremony of Bedanta & Namrata',
      revealedBadge: '✨ Revealed! ✨',
      scratchReset: '↺ পুনৰ ঘঁহক',
      scratchHint: '👆 মাউচ বা আঙুলিৰে সোণালী স্তৰটো গুচাওক',
      timelineEyebrow: 'শুভ দিনপঞ্জী',
      timelineTitle: 'মাঙ্গলিক অনুষ্ঠানসমূহ',
      badgeJurun: 'জোৰোণ',
      badgeWedding: 'শুভ বিবাহ',
      badgeReception: 'প্ৰীতিভোজ',
      jurunTitle: 'জোৰোণ (Jurun Ceremony)',
      weddingTitle: 'জোৰোণ আৰু শুভ বিবাহ (Jurun & Wedding)',
      weddingRitualHeading: 'শুভ বিবাহ (Wedding Ceremony)',
      weddingDate: '১১ ফাগুণ, ২০২৭ (বুধবাৰ)',
      weddingDateEn: '11 Phagun (24th February, 2027)',
      jurunDesc: '',
      weddingDesc: '',
      receptionTitle: 'অভ্যৰ্থনা (Reception)',
      receptionDate: '১৩ ফাগুণ, ২০২৭ (শুক্ৰবাৰ)',
      receptionDateEn: '13 Phagun (26th February, 2027)',
      receptionDesc: '',
      storyBtn: 'আমাৰ প্ৰেমৰ যাত্ৰা',
      storyEyebrow: 'আমাৰ প্ৰেমৰ যাত্ৰা',
      storyTitle: 'স্মৃতিৰ <em>এমুঠি</em>',
      storySubtitle: 'দুটি হৃদয়ৰ এক হোৱাৰ মধুৰ গাঁথা',
      blessingInvitationText: 'আমাৰ জীৱনৰ এই গুৰুত্বপূৰ্ণঁ দিনটোত আপুনি সপৰিয়ালে উপস্থিত হৈ আমাক দিহাই বুদ্ধিয়ে, বিয়ানাম এফাঁকি আৰু এজোলোকা উৰুলিৰে আশীৰ্বাদ দিবহি বুলি ৰভাৰ তলত বৰ আশাৰে বাট চাই থাকিম।',
      blessingInvitationReminder: '🗓️ কেলেণ্ডাৰত তাৰিখটো দাগ এটা দি থ’বচোন।',
      wishesEyebrow: 'আপোনাৰ মৰম',
      wishesTitle: 'শুভেচ্ছা <em>বাৰ্তা</em> (Guest Wishes)',
      wishesDesc: 'নৱদম্পতীৰ বাবে আপোনাৰ মৰম আৰু শুভকামনাৰ দুআষাৰ লিখি পঠিয়াওক।',
      wishPlaceholderName: 'আপোনাৰ নাম...',
      wishPlaceholderMsg: 'নৱদম্পতীক আপোনাৰ শুভেচ্ছা জনাওক...',
      submitWishBtn: '💌 শুভেচ্ছা পঠিয়াওক',
      venueIti: 'ইতি',
      venueCouple: 'বেদান্ত',
      venueFamily: 'আৰু পৰিয়ালবৰ্গ।',
      venueLabelBaahor: 'বিবাহ বাহৰঃ',
      venueValBaahor: 'আমাৰ আপোন ঘৰখন',
      venueLabelAddress: 'ঠিকনাঃ',
      venueValAddress: 'গ\'ৰখীয়াদ\'ল ন-আলি, যোৰহাট',
      venueMapBtn: '📍 গুগল মেপত স্থান চাওক (Google Maps)',
      footerBlessing: '',
      footerSub: '',
      whatsappShareText: '',
      envCardTag: 'শুভ পৰিণয়',
      envCardCouple: 'বেদান্ত আৰু নম্ৰতা',
      envCardTagline: '',
      envBtnText: 'নিমন্ত্ৰণ-পত্ৰ খোলক',
      envInstruction: ''
    },
    en: {
      siteTitle: 'Bedanta & Namrata Wedding Invitation | শুভ বিবাহ',
      auspiciousTag: '|| Shree Shree Prajapataye Namah ||',
      heroSub: 'Wedding Invitation',
      heroTitle: 'Bedanta & Namrata',
      heroGroom: 'Bedanta',
      heroBride: 'Namrata',
      heroDatePill: '11 Phagun (24th February, 2027)',
      announcementLine1: 'Like the golden fields of Aghon, a dream cherished in our hearts blossoms today into reality.',
      announcementHighlight: 'The little girl who once draped her mother\'s mekhela chador to play bride is now stepping into this sacred bond.',
      cdHeader: '⏳ Countdown to The Wedding',
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
      invitationIntro: 'Taking the sacred fire as our eternal witness and bound in bonds of seven lifetimes, promising to be together forever with that special one, we step forward to become one on <span class="card-date-highlight">11 Phagun (24th February, 2027) Wednesday.</span>',
      invitationReception: 'On this joyous occasion, seeking the warm blessings of our loved ones and community, we cordially host a grand reception on <span class="card-date-highlight">13 Phagun (26th February, 2027) Friday.</span>',
      scratchEyebrow: 'Auspicious Date Reveal',
      scratchTitle: 'Scratch to Reveal <em>The Date</em>',
      scratchDesc: 'Gently rub the golden silk surface to reveal our wedding date',
      scratchCoverText: 'SCRATCH TO REVEAL',
      revealedDateTitle: '24th February, 2027',
      revealedDateSub: 'Wedding Ceremony of Bedanta & Namrata',
      revealedBadge: '✨ Revealed! ✨',
      scratchReset: '↺ Reset Card',
      scratchHint: '👆 Gently scratch using mouse or finger',
      timelineEyebrow: 'Auspicious Schedule',
      timelineTitle: 'Wedding Ceremonies',
      badgeJurun: 'Jurun',
      badgeWedding: 'Sacred Wedding',
      badgeReception: 'Grand Reception',
      jurunTitle: 'Jurun Ceremony',
      weddingTitle: 'Jurun & Sacred Wedding',
      weddingRitualHeading: 'Wedding Ceremony',
      weddingDate: '11 Phagun (24th February, 2027) Wednesday',
      weddingDateEn: '11 Phagun (24th February, 2027)',
      jurunDesc: '',
      weddingDesc: '',
      receptionTitle: 'Reception (Abhyarthana)',
      receptionDate: '13 Phagun (26th February, 2027) Friday',
      receptionDateEn: '13 Phagun (26th February, 2027)',
      receptionDesc: '',
      storyBtn: 'Our Love Story',
      storyEyebrow: 'Our Love Story',
      storyTitle: 'Cherished <em>Moments</em>',
      storySubtitle: 'A sweet story of two souls becoming one',
      blessingInvitationText: 'On this momentous day of our lives, we eagerly await under the wedding canopy with great hope for you and your family to grace the occasion, guide us with your wisdom, and bless us with traditional wedding songs and joyful ululations.',
      blessingInvitationReminder: '🗓️ Please mark the date on your calendar!',
      wishesEyebrow: 'Love & Blessings',
      wishesTitle: 'Guest <em>Wishes</em> & Blessings',
      wishesDesc: 'Pen your warm blessings and wishes for Bedanta and Namrata.',
      wishPlaceholderName: 'Your Name...',
      wishPlaceholderMsg: 'Write your blessings or wishes here...',
      submitWishBtn: '💌 Send Blessing',
      venueIti: 'Cordially Invited By,',
      venueCouple: 'Bedanta',
      venueFamily: '& Family.',
      venueLabelBaahor: 'Wedding Venue:',
      venueValBaahor: 'Our Sweet Home',
      venueLabelAddress: 'Address:',
      venueValAddress: 'Gorkhiya Dol Na-Ali, Jorhat',
      venueMapBtn: '📍 View Location on Google Maps',
      footerBlessing: '',
      footerSub: '',
      whatsappShareText: '',
      envCardTag: 'Wedding Invitation',
      envCardCouple: 'Bedanta & Namrata',
      envCardTagline: '',
      envBtnText: 'Open Invitation',
      envInstruction: ''
    }
  };

  let currentLang = 'as';

  function setLanguage(lang) {
    currentLang = lang;
    window.WeddingApp = window.WeddingApp || {};
    window.WeddingApp.currentLang = lang;
    try {
      localStorage.setItem('wedding_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    if (document.body) {
      document.body.classList.toggle('lang-en', lang === 'en');
      document.body.classList.toggle('lang-as', lang === 'as');
    }

    const dict = i18n[lang] || i18n.as;

    // 1. Language Toggle Buttons UI
    document.querySelectorAll('.lang-btn, .lang-toggle-btn button').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang') || (btn.id === 'lang-btn-as' ? 'as' : 'en');
      if (btnLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 2. Page Title
    if (dict.siteTitle) document.title = dict.siteTitle;

    // 3. ID-based Updates
    const setHtml = (id, val) => {
      const el = document.getElementById(id);
      if (el && val !== undefined) el.innerHTML = val;
    };
    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el && val !== undefined) el.textContent = val;
    };

    setHtml('hero-auspice-tag', dict.auspiciousTag);
    setHtml('hero-title-text', dict.heroTitle);
    setHtml('hero-sub-text', dict.heroSub);
    setHtml('hero-groom-display', dict.heroGroom);
    setHtml('hero-bride-display', dict.heroBride);
    setHtml('hero-date-pill-text', dict.heroDatePill);

    setHtml('announcement-line1', dict.announcementLine1);
    setHtml('announcement-highlight', dict.announcementHighlight);

    setHtml('cd-header-text', dict.cdHeader);
    setText('label-days', dict.days);
    setText('label-hours', dict.hours);
    setText('label-mins', dict.mins);
    setText('label-secs', dict.secs);

    setHtml('card-intro', dict.invitationIntro);
    setHtml('card-intro-reception', dict.invitationReception);

    setText('scratch-eyebrow', dict.scratchEyebrow);
    setHtml('scratch-title', dict.scratchTitle);
    setText('scratch-desc', dict.scratchDesc);
    setText('revealed-date-title', dict.revealedDateTitle);
    setText('revealed-date-sub', dict.revealedDateSub);
    setText('revealed-badge', dict.revealedBadge);
    setText('scratch-reset-btn', dict.scratchReset);
    setText('scratch-hint-text', dict.scratchHint);

    setText('timeline-eyebrow', dict.timelineEyebrow);
    setHtml('timeline-title', dict.timelineTitle);
    setText('badge-jurun', dict.badgeJurun);
    setText('badge-wedding', dict.badgeWedding);
    setText('badge-reception', dict.badgeReception);

    setHtml('jurun-title', dict.jurunTitle);
    setHtml('jurun-date', dict.jurunDate);
    setHtml('jurun-date-en', dict.jurunDateEn);
    setHtml('jurun-desc', dict.jurunDesc);

    setHtml('wedding-title', dict.weddingTitle);
    setHtml('wedding-ritual-heading', dict.weddingRitualHeading);
    setHtml('wedding-date', dict.weddingDate);
    setHtml('wedding-date-en', dict.weddingDateEn);
    setHtml('wedding-desc', dict.weddingDesc);

    setHtml('reception-title', dict.receptionTitle);
    setHtml('reception-date', dict.receptionDate);
    setHtml('reception-date-en', dict.receptionDateEn);
    setHtml('reception-desc', dict.receptionDesc);

    const storyBtnText = document.querySelector('.story-btn-text');
    if (storyBtnText) storyBtnText.textContent = dict.storyBtn;
    setText('story-eyebrow', dict.storyEyebrow);
    setHtml('story-title', dict.storyTitle);
    setText('story-subtitle', dict.storySubtitle);

    setHtml('blessing-invitation-text', dict.blessingInvitationText);
    setHtml('blessing-invitation-reminder', dict.blessingInvitationReminder);

    setText('wishes-eyebrow', dict.wishesEyebrow);
    setHtml('wishes-title', dict.wishesTitle);
    setText('wishes-desc', dict.wishesDesc);
    const wishSender = document.getElementById('wish-sender');
    if (wishSender) wishSender.placeholder = dict.wishPlaceholderName;
    const wishMsg = document.getElementById('wish-message');
    if (wishMsg) wishMsg.placeholder = dict.wishPlaceholderMsg;
    const submitWish = document.getElementById('submit-wish-btn');
    if (submitWish) submitWish.textContent = dict.submitWishBtn;

    setText('venue-iti', dict.venueIti);
    setHtml('venue-couple', dict.venueCouple);
    setText('venue-family', dict.venueFamily);
    setText('venue-label-baahor', dict.venueLabelBaahor);
    setText('venue-val-baahor', dict.venueValBaahor);
    setText('venue-label-address', dict.venueLabelAddress);
    setText('venue-val-address', dict.venueValAddress);
    setHtml('venue-map-btn-text', dict.venueMapBtn);

    setHtml('footer-blessing', dict.footerBlessing);
    setHtml('footer-sub', dict.footerSub);
    setHtml('whatsapp-share-text', dict.whatsappShareText);

    setText('env-card-tag', dict.envCardTag);
    setText('env-card-couple', dict.envCardCouple);
    setText('env-card-tagline', dict.envCardTagline);
    const openInvText = document.getElementById('open-invitation-text');
    if (openInvText) openInvText.textContent = dict.envBtnText;
    const envInstr = document.querySelector('.envelope-instruction');
    if (envInstr) envInstr.textContent = dict.envInstruction;

    // 4. Update any elements with data-i18n-as / data-i18n-en
    document.querySelectorAll('[data-i18n-as]').forEach(el => {
      const val = lang === 'as' ? el.getAttribute('data-i18n-as') : el.getAttribute('data-i18n-en');
      if (val !== null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.innerHTML = val;
        }
      }
    });

    // 5. Dispatch global notification
    window.dispatchEvent(new CustomEvent('wedding:languageChanged', { detail: { lang, dict } }));
  }

  function initI18n(defaultLang) {
    let saved = null;
    try {
      saved = localStorage.getItem('wedding_lang');
    } catch (e) {}

    const langToUse = saved || defaultLang || 'as';

    // Hook up all buttons with data-lang or lang IDs
    document.querySelectorAll('.lang-btn, #lang-btn-as, #lang-btn-en').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang') || (btn.id === 'lang-btn-as' ? 'as' : 'en');
        setLanguage(targetLang);
      });
    });

    setLanguage(langToUse);
  }

  window.WeddingApp = window.WeddingApp || {};
  window.WeddingApp.i18n = i18n;
  window.WeddingApp.initI18n = initI18n;
  window.WeddingApp.setLanguage = setLanguage;
  window.WeddingApp.currentLang = currentLang;
})(window);
