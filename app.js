const modal = document.querySelector('#modal');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu-list li');
const sectionBlur = document.querySelectorAll('footer, header, main');

function toggleMenu() {
  modal.classList.toggle('hidden');
  modal.classList.toggle('flex');
  sectionBlur.forEach(section => {
    section.classList.toggle('blur');
  });
}

mobileMenu.addEventListener('click', () => {
  toggleMenu();
});
closeMenu.addEventListener('click', () => {
  toggleMenu();
});

menuLinks[0].addEventListener('click', () => {
  toggleMenu();
});

menuLinks[1].addEventListener('click', () => {
  toggleMenu();
});

menuLinks[2].addEventListener('click', () => {
  toggleMenu();
});
