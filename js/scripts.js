"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log('Working...');

    const katalog_img = document.querySelector('.header-bot__fish');
    var theDropdown = document.getElementById('btn-group');
    theDropdown.addEventListener('show.bs.dropdown', function () {
        katalog_img.src = 'assets/icons/katalog-remove.svg';
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