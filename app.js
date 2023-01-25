import workData from './projects.js';

const modal = document.querySelector('#modal');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu-list li');
const sectionBlur = document.querySelectorAll('footer, header, main');
const closeWorks = document.querySelector('#close-works');
const workSection = document.querySelector('#works');

const lightboxWorks = document.querySelector('#works-lightbox');
const lightboxContent = {
  title: document.querySelector('#works-lightbox-tittle'),
  client: document.querySelector('#works-lightbox-client'),
  role: document.querySelector('#works-lightbox-role'),
  year: document.querySelector('#works-lightbox-year'),
  image: document.querySelector('#works-lightbox-image'),
  body: document.querySelector('#works-lightbox-body'),
  skills: document.querySelector('#works-lightbox-skills'),
  live: document.querySelector('#works-lightbox-live'),
  source: document.querySelector('#works-lightbox-source'),
};
const formData = document.querySelectorAll('#name-input, #email, #text-input');
const storedData = {
  0: window.localStorage.getItem('0'),
  1: window.localStorage.getItem('1'),
  2: window.localStorage.getItem('2'),
};
const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;
const namePattern = /^[a-zA-Z ]+$/;
const formContent = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const nameForm = formContent.querySelector('#name-input');
const emailForm = formContent.querySelector('#email');
const textForm = formContent.querySelector('#text-input');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const textError = document.getElementById('text-error');
const errorContainer = document.getElementById('error-input');

// Filling storaged data

const localStorageSet = (feature, item) => {
  window.localStorage.setItem(feature, item);
};

// Local storage data

formData.forEach((data, index) => {
  data.addEventListener('input', () => {
    localStorageSet(index, data.value);
    storedData[index] = data.value;
  });
});

// Validations

function comparer(reGex, value) {
  return reGex.test(value) === false;
}

submitButton.addEventListener('click', (e) => {
  const nameInput = formContent.querySelector('#name-input').value;
  const emailInput = formContent.querySelector('#email').value;
  const textInput = formContent.querySelector('#text-input').value;
  if (nameInput != null && emailInput != null && textInput != null) {
    if (comparer(namePattern, nameInput) || comparer(emailPattern, emailInput) || !textInput) {
      e.preventDefault();
      errorContainer.classList.toggle('hidden');
      if (namePattern.test(nameInput) === false) {
        nameError.innerText = 'Remove any special symbols or numbers in your name input';
      } else {
        nameError.innerText = '';
      }
      if (emailPattern.test(emailInput) === false) {
        emailError.innerText = 'Write your email in lowercase';
      } else {
        emailError.innerText = '';
      }
      if (!textInput) {
        textError.innerText = 'Write your message in the text space';
      } else {
        textError.innerText = '';
      }
    } else {
      formContent.submit();
    }
  }
});

// Work section dynamic generator

workData.forEach((work) => {
  const workEntry = document.createElement('div');
  workEntry.className = 'grid-container-card m20px border-card bg-white p5vh';
  workEntry.innerHTML = `<div class="grid-item-picture"> <img class="border-10px fill-100" src="${work.image}" alt="Canopy project snapshot"> </div> <div class="grid-item-content flex flex-column"> <h2 class="p10px">${work.title}</h2> <div class="flex aic"> <h4 class="p10px client">${work.client}</h4> <img src="assets/images/Counter.svg" alt="Spacer"> <h5 class="p10px role">${work.role}</h5> <img src="assets/images/Counter.svg" alt="Spacer"> <h5 class="p10px year">${work.year}</h5> </div><div class='p10px m0'><p>${work.body}</p><a id='live-link' class="bold-link" href="${work.live}" target="_blank">See live</a><br><a id='source-link' class="bold-link" href="${work.source}" target="_blank">See source</a></div><ul class="xul aic"> </ul> <div> <button>See project</button> </div> </div>`;
  work.skills.forEach((skill) => {
    const skillEntry = document.createElement('li');
    skillEntry.className = 'mh2px p10px border-10px bg-tag';
    const skillText = document.createElement('h6');
    skillText.innerText = skill;
    skillEntry.appendChild(skillText);
    workEntry.querySelector('ul').appendChild(skillEntry);
  });
  workEntry.querySelector('ul');
  workSection.appendChild(workEntry);
});

const works = document.querySelectorAll('#works>div');

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

// Works lightbox dynamic content

works.forEach((work) => {
  work.addEventListener('click', () => {
    lightboxContent.title.innerText = work.querySelector('h2').innerText;
    lightboxContent.client.innerText = work.querySelector('.client').innerText;
    lightboxContent.role.innerText = work.querySelector('.role').innerText;
    lightboxContent.year.innerText = work.querySelector('.year').innerText;
    lightboxContent.image.setAttribute('src', work.querySelector('img').getAttribute('src'));
    lightboxContent.body.innerText = work.querySelector('p').innerText;
    lightboxContent.skills.innerHTML = work.querySelector('ul').innerHTML;
    lightboxContent.live.addEventListener('click', () => { window.open(`${work.querySelector('#live-link').getAttribute('href')}`); });
    lightboxContent.source.addEventListener('click', () => { window.open(`${work.querySelector('#source-link').getAttribute('href')}`); });
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

if (storedData[0] || storedData[1] || storedData[2]) {
  [nameForm.value, emailForm.value, textForm.value] = storedData;
}