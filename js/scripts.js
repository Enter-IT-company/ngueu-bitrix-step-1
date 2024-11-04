"use strict";

document.addEventListener('DOMContentLoaded', () => {
    console.log('Working...');
});
const button = document.querySelector('.left-menu-top__main__btn');
const icon = document.querySelector('.dir-up');

button.addEventListener('click', () => { 
    icon.classList.toggle('rotate');
});
