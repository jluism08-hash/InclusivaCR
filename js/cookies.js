// cookies.js - Gestión del banner de cookies sin rastreo

document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('cookie-accept');
  const closeButton = document.getElementById('cookie-close');

  if (!cookieBanner || !acceptButton || !closeButton) return;

  function mostrarBanner() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => cookieBanner.classList.add('show'), 500);
    }
  }

  function aceptarCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    cookieBanner.classList.remove('show');
    console.log('✓ Preferencia de privacidad guardada en localStorage');
  }

  acceptButton.addEventListener('click', aceptarCookies);
  closeButton.addEventListener('click', aceptarCookies);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cookieBanner.classList.contains('show')) {
      aceptarCookies();
    }
  });

  mostrarBanner();
});
