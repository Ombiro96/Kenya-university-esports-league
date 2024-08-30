const games = [
    { name: 'PUBG', class: 'pubg', image: 'wallpaperflare.com_wallpaper.jpg' },
    { name: 'eFootball', class: 'efootball', image: 'wp13111909-efootball-2024-wallpapers.png' },
    { name: 'Fortnite', class: 'fortnite', image: 'fortnite-1920x1080-hd-ldycemyqolid6ppy.jpg' },
    { name: 'Call of Duty', class: 'cod', image: '6259-3840x2160-desktop-4k-call-of-duty-wallpaper.jpg' },
    { name: 'PUBG', class: 'pubg', image: 'wallpaperflare.com_wallpaper.jpg' },
    { name: 'eFootball', class: 'efootball', image: 'wp13111909-efootball-2024-wallpapers.png' },
    { name: 'Fortnite', class: 'fortnite', image: 'fortnite-1920x1080-hd-ldycemyqolid6ppy.jpg' },
    { name: 'Call of Duty', class: 'cod', image: '6259-3840x2160-desktop-4k-call-of-duty-wallpaper.jpg' }
];

const images = [
    'pexels-elti-meshau-107925-333850.jpg',
    'wallpaperflare.com_wallpaper.jpg',
    'wp13111909-efootball-2024-wallpapers.png',
    'fortnite-1920x1080-hd-ldycemyqolid6ppy.jpg',
    '6259-3840x2160-desktop-4k-call-of-duty-wallpaper.jpg'
];

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
}

const carousel = document.querySelector('.games-carousel');
const flickerDotsContainer = document.querySelector('.flicker-dots');
let currentIndex = 0;
const cardsToShow = 3;
const hero = document.querySelector('.hero');

let currentImageIndex = 0;

games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card', game.class);
    card.style.backgroundImage = `url(${game.image})`;

    const cardText = document.createElement('span');
    cardText.classList.add('card-text');
    cardText.textContent = game.name;

    card.appendChild(cardText);
    carousel.appendChild(card);
});

const totalCards = carousel.children.length;
const totalPages = Math.ceil(totalCards / cardsToShow);

const loadingBarFill = document.createElement('div');
loadingBarFill.classList.add('loading-bar-fill');
document.querySelector('.loading-bar').appendChild(loadingBarFill);

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

function nextPage() {
    if (currentIndex < totalPages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

setInterval(nextPage, 5000);

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

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
}



setInterval(changeBackgroundImage, 5000);

updateCarousel();
changeBackgroundImage();
