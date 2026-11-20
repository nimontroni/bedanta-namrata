/**
 * Content Loader: Fetches data/content.json with safety fallbacks
 * Ensures the website works seamlessly on static web servers and local file previews.
 */
(function(window) {
  'use strict';

  let weddingData = null;

  async function loadWeddingContent() {
    try {
      const response = await fetch('data/content.json', { cache: 'no-cache' });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      weddingData = await response.json();
      return weddingData;
    } catch (err) {
      console.warn('Failed to fetch data/content.json, using bundled data fallback:', err);
      if (window.__WEDDING_CONTENT_FALLBACK__) {
        weddingData = window.__WEDDING_CONTENT_FALLBACK__;
        return weddingData;
      }
      if (window.__DEFAULT_CONTENT__) {
        weddingData = window.__DEFAULT_CONTENT__;
        return weddingData;
      }
      throw err;
    }
  }

  function getWeddingData() {
    return weddingData;
  }

  window.WeddingApp = window.WeddingApp || {};
  window.WeddingApp.loadWeddingContent = loadWeddingContent;
  window.WeddingApp.getWeddingData = getWeddingData;
})(window);
