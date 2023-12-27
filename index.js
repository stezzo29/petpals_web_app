'use strict';

const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipeLeft);
rightBtn.addEventListener('click', swipeRight);

function swipeLeft() {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if (currentIndex === 0) {
        nextIndex = CAROUSEL_SIZE - 1;
    } else {
        nextIndex = currentIndex - 1;
    }

    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
}

function swipeRight() {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if (currentIndex === CAROUSEL_SIZE - 1) {
        nextIndex = 0;
    } else {
        nextIndex = currentIndex + 1;
    }

    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
}

navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        const currentCarouselItem = document.querySelector('.carousel-item.active');
        const currentIndex = carouselItems.indexOf(currentCarouselItem);

        if (index === currentIndex) {
            return;
        }

        currentCarouselItem.classList.remove('active');
        navItems[currentIndex].classList.remove('active');

        carouselItems[index].classList.add('active');
        navItems[index].classList.add('active');
    });
});

