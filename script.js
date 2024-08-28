const carousel = document.querySelector('.games-carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const cardsToShow = 3;

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
}

function updateCarousel() {
    console.log("updateCarousel");
    const offset = -currentIndex * (carousel.children[0].offsetWidth + parseFloat(getComputedStyle(carousel).gap));
    carousel.style.transform = `translateX(${offset}px)`;
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
    if (currentIndex < carousel.children.length - cardsToShow) {
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

