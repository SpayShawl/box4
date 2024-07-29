let currentIndex = 0;

function showSlide(index, elem) {
    const slides = document.querySelectorAll(elem);
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * (100 / slides.length);
    slides[0].parentNode.style.transform = `translateX(${offset}%)`;
}

function nextSlide(elem) {
    showSlide(currentIndex + 1, elem);
}

function prevSlide(elem) {
    showSlide(currentIndex - 1, elem);
}