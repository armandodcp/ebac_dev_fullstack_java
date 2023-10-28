document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".carousel-slider");
    const slideWidth = document.querySelector(".carousel-item").clientWidth;
    const totalSlides = document.querySelectorAll(".carousel-item").length;
    let counter = 0;

    function updateSlider() {
        const newTransformValue = -counter * slideWidth + "px";
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = "translateX(" + newTransformValue + ")";
    }

    function nextSlide() {
        if (counter < totalSlides - 1) {
            counter++;
        } else {
            counter = 0;
        }

        updateSlider();
    }

    setInterval(nextSlide, 3000);
});