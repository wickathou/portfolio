const modal = document.querySelector('#modal');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu-list li');
const sectionBlur = document.querySelectorAll('footer, header, main');
const closeWorks = document.querySelector('#close-works');
const works = document.querySelectorAll('#works>div');
const lightboxWorks = document.querySelector('#works-lightbox');


// Navbar toggle

function toggleMenu() {
  modal.classList.toggle('hidden');
  modal.classList.toggle('flex');
  sectionBlur.forEach((section) => {
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

// Works toggle

function toggleWorks() {
  lightboxWorks.classList.toggle('hidden');
  sectionBlur.forEach((section) => {
    section.classList.toggle('blur');
  });
}

works.forEach(function(work) {
  work.addEventListener('click', () => {
    toggleWorks();
  });
});

closeWorks.addEventListener('click', () => {
  toggleWorks();
});