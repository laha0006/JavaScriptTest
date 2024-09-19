const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 1;
let isTransitioning = false;

// Clone first and last slides for the infinite loop effect
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Append and prepend the clones to the carousel
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, slides[0]);

// Update the width of the carousel to account for extra slides (clones)
carousel.style.transform = `translateX(-100%)`; // Start at real Slide 1

// Function to update the carousel's position
function updateCarouselPosition() {
    const offset = -currentIndex * 100;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${offset}%)`;
}

// Event listener for Next button
nextButton.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updateCarouselPosition();
});

// Event listener for Previous button
prevButton.addEventListener('click', () => {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updateCarouselPosition();
});

// Handle the infinite loop effect when transition ends
carousel.addEventListener('transitionend', () => {
    if (currentIndex === slides.length + 1) {
        // Moved to clone of Slide 1 (after Slide 4), jump to real Slide 1
        carousel.style.transition = 'none';
        currentIndex = 1;
        carousel.style.transform = `translateX(-100%)`;
    } else if (currentIndex === 0) {
        // Moved to clone of Slide 4 (before Slide 1), jump to real Slide 4
        carousel.style.transition = 'none';
        currentIndex = slides.length;
        carousel.style.transform = `translateX(-${slides.length * 100}%)`;
    }
    isTransitioning = false;
});
