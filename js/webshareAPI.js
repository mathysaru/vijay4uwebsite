/**
 *
 * Web Share API
 *
 *
 */

var shareBtn = document.getElementById('share-btn');
    shareFallback = document.getElementById('share-fallback');
    pageTitle = document.querySelector('h3.entry-title').textContent;
    pageUrl = "https://www.vijay4u.com";

shareBtn.addEventListener("click", function(ev) {
  if (navigator.share) {
    navigator.share({
        text: pageTitle,
        url: pageUrl
      });
  } else {
    shareFallback.style.display = 'flex';
    shareBtn.style.display = 'none';
  }
});
