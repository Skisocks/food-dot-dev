(function() {
  const toggle = document.getElementById('wakeLockToggle');
  if (!toggle) return;

  const label = toggle.parentElement.querySelector('.toggle-label');
  let wakeLock = null;

  // Hide toggle if Wake Lock API is not supported
  if (!('wakeLock' in navigator)) {
    toggle.parentElement.parentElement.style.display = 'none';
    return;
  }

  async function requestWakeLock() {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      label.textContent = 'Screen staying on';

      wakeLock.addEventListener('release', () => {
        label.textContent = 'Keep screen on';
        toggle.checked = false;
      });
    } catch (err) {
      label.textContent = 'Keep screen on';
      toggle.checked = false;
    }
  }

  function releaseWakeLock() {
    if (wakeLock) {
      wakeLock.release();
      wakeLock = null;
    }
    label.textContent = 'Keep screen on';
  }

  toggle.addEventListener('change', function() {
    if (this.checked) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }
  });

  // Re-acquire wake lock when page becomes visible again
  document.addEventListener('visibilitychange', async () => {
    if (wakeLock !== null && document.visibilityState === 'visible' && toggle.checked) {
      await requestWakeLock();
    }
  });
})();