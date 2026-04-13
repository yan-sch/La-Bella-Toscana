// navigation.js - Navigation logic for La Bella Toscana

function showPage(pageId) {
    // Hide all page sections
    document.querySelectorAll('.page-section').forEach(page => page.classList.remove('active'));

    // Show the selected page section
    document.getElementById(pageId).classList.add('active');

    // Update navigation button states
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active-btn'));
    document.getElementById('btn-' + pageId).classList.add('active-btn');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}