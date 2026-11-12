/* Load after upgrade.js. Keeps the rest of your existing website unchanged. */
(() => {
  'use strict';
  const videoId = 'PdQ3aMpOlfY';
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const oldPlayer = document.getElementById('fypVideo');
  if (!oldPlayer) return;

  if (typeof oldPlayer.pause === 'function') oldPlayer.pause();
  oldPlayer.removeAttribute('src');
  if (typeof oldPlayer.load === 'function') oldPlayer.load();

  const frame = document.createElement('iframe');
  frame.id = 'fypYouTube';
  frame.title = 'Dharinhy Jeevan — FYP explanation and demonstration';
  frame.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
  frame.loading = 'lazy';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.style.cssText = 'display:block;width:100%;aspect-ratio:16/9;height:auto;min-height:200px;border:0;border-radius:14px;background:#050610;';
  oldPlayer.replaceWith(frame);

  const status = document.getElementById('videoStatus');
  if (status) status.textContent = 'Press Play to watch the FYP explanation and demonstration. If the player is unavailable, use Watch on YouTube below.';
  const section = document.getElementById('fyp');
  const oldDownload = section?.querySelector('a[download][href*="DRfypvideo"]');
  const watchLink = oldDownload || document.createElement('a');
  watchLink.removeAttribute('download');
  watchLink.href = watchUrl;
  watchLink.target = '_blank';
  watchLink.rel = 'noopener noreferrer';
  watchLink.className = 'button';
  watchLink.textContent = 'Watch on YouTube ↗';
  if (!oldDownload) frame.parentElement.append(watchLink);
})();
