"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // -------------- Swiper top ---------------

    const SWIPER = new Swiper('.Main-swiper', {
        loop: true,
        effect: 'fade',

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }
    });

    const LEFT_ARROWS = document.querySelectorAll('.left-arrow');
    const RIGHT_ARROWS = document.querySelectorAll('.right-arrow');

    LEFT_ARROWS.forEach(arrow => {
        arrow.addEventListener('click', () => {
            SWIPER.slidePrev();
        });
    });

    RIGHT_ARROWS.forEach(arrow => {
        arrow.addEventListener('click', () => {
            SWIPER.slideNext();
        });
    });


// -------------- Swiper news ---------------

const SWIPER_NEWS = new Swiper('.news', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: '.arrow-main__right',
        prevEl: '.arrow-main__left',
    },
    on: {
        init: function () {
            updateNavigationButtons(this);
        },
        slideChange: function () {
            updateNavigationButtons(this);
        },
    },
});

function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('.arrow-main__left');
    const nextButton = document.querySelector('.arrow-main__right');

    if (swiper.isBeginning) {
        prevButton.classList.add('arrow-main__disabled');
    } else {
        prevButton.classList.remove('arrow-main__disabled');
    }

    if (swiper.isEnd) {
        nextButton.classList.add('arrow-main__disabled');
    } else {
        nextButton.classList.remove('arrow-main__disabled');
    }
}


// -------------- Swiper pop goods ---------------

const SWIPER_GOODS = new Swiper('.pop-goods', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: '.arrow-main__right',
        prevEl: '.arrow-main__left',
    },
    on: {
        init: function () {
            updateNavigationButtons(this);
        },
        slideChange: function () {
            updateNavigationButtons(this);
        },
    },
});

function updateNavigationButtons(swiper) {
    const prevButton = document.querySelector('#arrow-left-goods');
    const nextButton = document.querySelector('#arrow-right-goods');

    if (swiper.isBeginning) {
        prevButton.classList.add('arrow-main__disabled');
    } else {
        prevButton.classList.remove('arrow-main__disabled');
    }

    if (swiper.isEnd) {
        nextButton.classList.add('arrow-main__disabled');
    } else {
        nextButton.classList.remove('arrow-main__disabled');
    }
}
// -------------- Header button katalog img ---------------

    const KATALOG_IMG = document.querySelector('.header-bot__fish');
    const DROPDOWN = document.getElementById('btn-group');

    // -------------- Header button katalog img after open---------------

    DROPDOWN.addEventListener('show.bs.dropdown',() => {
        KATALOG_IMG.src = 'assets/ICONs/katalog-remove.svg';
        KATALOG_IMG.style.margin = "13px 0 13px 0";
    });

    // -------------- Header button katalog img after close---------------

    DROPDOWN.addEventListener('hide.bs.dropdown', () => {
        KATALOG_IMG.src = 'assets/ICONs/katakog-fish.svg';
        KATALOG_IMG.style.margin = "11px 0 14px 0";
    });


// -------------- Left menu katalog img ---------------

    const LEFT_MENU_BUTTON = document.querySelector('.left-menu-top__main__btn');
    const ICON = document.querySelector('.dir-up');

    LEFT_MENU_BUTTON.addEventListener('click', () => { 
        ICON.classList.toggle('rotate');
    });
});

/** 
 * 2. Так же в JS для обозначение переменной,
 * как элемент DOM-дерева принято именовать 
 * с  в начале (напр., $element).
 */
