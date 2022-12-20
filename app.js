const modal = document.querySelector('#modal');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}

modal.addEventListener('click', toggleMenu());
closeMenu.addEventListerner('click', toggleMenu()),

menuLinks.forEach((link) => {
    link.addEventListener('click', togglemenu);
});
