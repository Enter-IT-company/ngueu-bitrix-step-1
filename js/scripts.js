"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log('Working...');

    // Инициализация слайдеров
    const heroSwiper = new Swiper('.hero-slider .swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const newArrivalsSwiper = new Swiper('.new-arrivals-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const popularProductsSwiper = new Swiper('.popular-products-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const recipesSwiper = new Swiper('.recipes-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});