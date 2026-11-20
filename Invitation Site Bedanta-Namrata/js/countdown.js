/**
 * Wedding Countdown Timer (Target: 11 Phagun / 24th February, 2027 00:00:00 IST)
 * Accurately calculates days, hours, minutes, and seconds.
 * Translates numerals and unit labels dynamically between Assamese and English.
 */
(function(window) {
  'use strict';

  const assameseDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

  function toAssameseNumber(num) {
    const padded = String(num).padStart(2, '0');
    return padded.replace(/[0-9]/g, d => assameseDigits[+d]);
  }

  function initCountdown(targetDateStr) {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    const labelDays = document.getElementById('label-days');
    const labelHours = document.getElementById('label-hours');
    const labelMins = document.getElementById('label-mins');
    const labelSecs = document.getElementById('label-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    let dateStr = targetDateStr || '2027-02-24T00:00:00+05:30';
    if (typeof dateStr === 'string' && dateStr.includes('2026')) {
      dateStr = dateStr.replace('2026', '2027');
    }

    const targetTime = new Date(dateStr).getTime();

    function update() {
      const now = Date.now();
      const diff = targetTime - now;
      const currentLang = (window.WeddingApp && window.WeddingApp.currentLang) || 'as';

      if (diff <= 0) {
        const zero = currentLang === 'as' ? '০০' : '00';
        daysEl.textContent = zero;
        hoursEl.textContent = zero;
        minsEl.textContent = zero;
        secsEl.textContent = zero;
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      if (currentLang === 'as') {
        daysEl.textContent = toAssameseNumber(days);
        hoursEl.textContent = toAssameseNumber(hours);
        minsEl.textContent = toAssameseNumber(mins);
        secsEl.textContent = toAssameseNumber(secs);

        if (labelDays) labelDays.textContent = 'দিন';
        if (labelHours) labelHours.textContent = 'ঘণ্টা';
        if (labelMins) labelMins.textContent = 'মিনিট';
        if (labelSecs) labelSecs.textContent = 'ছেকেণ্ড';
      } else {
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minsEl.textContent = String(mins).padStart(2, '0');
        secsEl.textContent = String(secs).padStart(2, '0');

        if (labelDays) labelDays.textContent = 'Days';
        if (labelHours) labelHours.textContent = 'Hours';
        if (labelMins) labelMins.textContent = 'Mins';
        if (labelSecs) labelSecs.textContent = 'Secs';
      }
    }

    update();
    setInterval(update, 1000);

    // Re-render immediately on language change
    window.addEventListener('wedding:languageChanged', update);
  }

  window.WeddingApp = window.WeddingApp || {};
  window.WeddingApp.initCountdown = initCountdown;
  window.WeddingApp.toAssameseNumber = toAssameseNumber;
})(window);
