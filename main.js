const modalWindow = document.querySelector('.modal-backdrop');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const menuWindow = document.querySelector('.menu-window');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const orderBtn = document.querySelector('#order');
const burgerBtn = document.querySelector('.burger-btn');
const submitBtn = document.querySelector('.modal-btn');

function openModal() {    
    modalWindow.classList.add("is-open");
}
function closeModal() {    
    modalWindow.classList.remove("is-open");
}
function openMenu() {    
    menuWindow.classList.add("is-open");
}
function closeMenu() {    
    menuWindow.classList.remove("is-open");
}

orderBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
burgerBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);