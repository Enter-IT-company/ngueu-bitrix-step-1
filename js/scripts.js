"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log('Working...'); // можно убрать

    /** 
     * 1. const, let и var разные операторы
     * старайся избегать использование var.
     * 2. Так же в JS для обозначение переменной,
     * как элемент DOM-дерева принято именовать 
     * с $ в начале (напр., $element).
     * 3. Нарушены правила именования переменных.
     * В JS переменные принято указывать в стиле camelCase,
     * константы в стиле UPPER_CASE (кроме DOM-элементы, ибо они
     * всегда должны быть константами).
     * 4. Проведи код-ревью и улучшь оформление.
     * Визуально раздели код на смысловые части:
     * - Объявление переменных
     * - Привязка первого события
     * - Привязка второго события
     * - Объявления другой группы переменных
     * - Привязка события
     * 5. В первых двух события ты используешь function, а в последнем
     * arrow function. Приведи к одному стилю. Функции обратного вызова
     * (коллбеки) принято оформлять с помощь arrow function.
     */
    const katalog_img = document.querySelector('.header-bot__fish');
    var theDropdown = document.getElementById('btn-group');
    theDropdown.addEventListener('show.bs.dropdown', function () {
        katalog_img.src = 'assets/icons/katalog-remove.svg';
        /**
         * getElementsByClassName - устарело. Используй querySelector, querySelectorAll
         * Зачем ищешь элемент, если ты его внес в переменную katalog_img?
         */
        document.getElementsByClassName('header-bot__fish')[0].style.margin = "15px 8px 15px 32px";
    });
    theDropdown.addEventListener('hide.bs.dropdown', function () {
        katalog_img.src = 'assets/icons/katakog-fish.svg';
        document.getElementsByClassName('header-bot__fish')[0].style.margin = "11px 8px 16px 32px";
    });

    const left_menu_button = document.querySelector('.left-menu-top__main__btn');
    const icon = document.querySelector('.dir-up');
    left_menu_button.addEventListener('click', () => { 
        icon.classList.toggle('rotate');
    });
});