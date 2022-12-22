const modal = document.querySelector('#modal');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu-list li');
const sectionBlur = document.querySelectorAll('footer, header, main');
const closeWorks = document.querySelector('#close-works');
const works = document.querySelectorAll('#works>div');
const lightboxWorks = document.querySelector('#works-lightbox');
const lightboxContent = {
  title: document.querySelector('#works-lightbox-tittle'),
  client: document.querySelector('#works-lightbox-client'),
  role: document.querySelector('#works-lightbox-role'),
  year: document.querySelector('#works-lightbox-year'),
  image: document.querySelector('#works-lightbox-image'),
  body: document.querySelector('#works-lightbox-body'),
  skills: document.querySelector('#works-lightbox-skills'),
};

// Navbar toggle

function toggleMenu() {
  modal.classList.toggle('hidden');
  modal.classList.toggle('flex');
  sectionBlur.forEach((section) => {
    section.classList.toggle('blur');
  });
}

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

works.forEach((work) => {
  work.addEventListener('click', () => {
    lightboxContent.title.innerText = work.querySelector('h2').innerText;
    lightboxContent.client.innerText = work.querySelector('.client').innerText;
    lightboxContent.role.innerText = work.querySelector('.role').innerText;
    lightboxContent.year.innerText = work.querySelector('.year').innerText;
    lightboxContent.image.setAttribute('src', work.querySelector('img').getAttribute('src'));
    lightboxContent.body.innerText = work.querySelector('p').innerText;
    lightboxContent.skills.innerHTML = work.querySelector('ul').innerHTML;
    toggleWorks();
  });
});

// Event listeners

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

closeWorks.addEventListener('click', () => {
  toggleWorks();
});