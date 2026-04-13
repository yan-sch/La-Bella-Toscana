// slideshow.js - Slideshow functionality for La Bella Toscana

let currentSlideIndex = 1;
let slideInterval;

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
    resetAutoSlide();
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        currentSlideIndex = 1;
    }

    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    if (slides.length > 0) {
        slides[currentSlideIndex - 1].style.display = "block";
    }
}

function startAutoSlide() {
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}