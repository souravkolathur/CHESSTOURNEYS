const slideImages = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let current = 0;
let timer;

// Clear all images
function reset() {
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].classList.remove('active');
    }
}

// Initialize the slider
function startSlide() {
    reset();
    slideImages[0].classList.add('active');

}

// Show previous image
function slideLeft() {
    reset();
    if (current === 0) {
        current = slideImages.length - 1;
    } else {
        current--;
    }
    slideImages[current].classList.add('active');
}

// Show next image
function nextSlide() {
    reset();
    if (current === slideImages.length - 1) {
        current = 0;
    } else {
        current++;
    }
    slideImages[current].classList.add('active');
}

// Click event for left arrow
prevBtn.addEventListener('click', function() {
    slideLeft();
    clearInterval(timer);

});

// Click event for right arrow
nextBtn.addEventListener('click', function() {
    nextSlide();
    clearInterval(timer);

});

// Initialize the slider
startSlide();
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});