"use strict";

let bars = document.querySelector('.mobile-hamburger');
let mobile = document.querySelector('.mobile');
let bars_ico = document.querySelector('.mobile-hamburger a i')

let count = 1;
bars.addEventListener('click', () => {
    mobile.classList.toggle('active')
    if (count == 1)
        bars_ico.classList.add('fa-solid', 'fa-x');

    if (count == 2) {
        bars_ico.classList.remove('fa-solid', 'fa-x');
        bars_ico.classList.add('fa-solid', 'fa-bars');
    }
    (count == 1) ? count++ : count = 1;
});

let toggle_anchor_btn = document.querySelector('.mobile ul li a')
toggle_anchor_btn.setAttribute('type', 'button')




