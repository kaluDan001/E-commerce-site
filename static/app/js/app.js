const slides = document.querySelectorAll(".banner-slide");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

document.querySelector(".prev").addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 8000);