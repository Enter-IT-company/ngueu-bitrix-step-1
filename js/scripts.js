"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // -------------- Swiper ---------------

    const SWIPER = new Swiper('.Main-swiper', {
        loop: true,
        effect: 'fade',
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // }
    });

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
