// cookies.js - Cookie consent and Google Maps functionality for La Bella Toscana

function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent_LaBellaToscana');

    if (consent === 'true') {
        // If already consented, load the map directly (banner stays hidden)
        loadGoogleMaps();
    } else if (consent === null) {
        // If not asked yet, show the banner
        document.getElementById('cookie-banner').style.display = 'flex';
    }
    // For 'false', nothing happens. The banner stays hidden and the map remains a placeholder.
}

function acceptCookies() {
    // Save consent in browser
    localStorage.setItem('cookieConsent_LaBellaToscana', 'true');
    // Hide the banner
    document.getElementById('cookie-banner').style.display = 'none';
    // Load the map
    loadGoogleMaps();
}

function declineCookies() {
    // Save rejection in browser
    localStorage.setItem('cookieConsent_LaBellaToscana', 'false');
    // Hide the banner
    document.getElementById('cookie-banner').style.display = 'none';
}

function loadGoogleMaps() {
    const mapContainer = document.getElementById('map-container');
    // Inject the real Google iframe, which was previously replaced by the placeholder
    mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.337583624831!2d11.328814515444053!3d43.31885067913388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a2cbf34bf5313%3A0x5d731212f12343e3!2sPiazza%20del%20Campo!5e0!3m2!1sde!2sde!4v1689955000000!5m2!1sde!2sde" width="100%" height="300" style="border:0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-top: 15px;" allowfullscreen="" loading="lazy"></iframe>';
}