function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
}

const carousel = document.querySelector('.games-carousel');
const flickerDotsContainer = document.querySelector('.flicker-dots');
let currentIndex = 0;
const cardsToShow = 3; // Number of cards visible per page
const totalCards = carousel.children.length;
const totalPages = Math.ceil(totalCards / cardsToShow);

// Populate the dots based on the number of pages
for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    flickerDotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    const scrollAmount = currentIndex * (carousel.children[0].offsetWidth + parseFloat(getComputedStyle(carousel).gap));
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < totalPages - 1) {
        currentIndex++;
        updateCarousel();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Initial update
updateCarousel();
