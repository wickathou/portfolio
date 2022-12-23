const modal = document.querySelector('#modal');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu-list li');
const sectionBlur = document.querySelectorAll('footer, header, main');
const closeWorks = document.querySelector('#close-works');
const workSection = document.querySelector('#works');
const workData = [
  {
    title: 'Tonic',
    client: 'Canopy',
    role: 'Back end dev',
    year: '2022',
    image: 'assets/images/Snapshoot Portfolio 4.svg',
    body: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: [
      'html',
      'css',
      'javaScript',
    ],
  },
  {
    title: 'Multi-Post Stories',
    client: 'Facebook',
    role: 'Full stack dev',
    year: '2018',
    image: 'assets/images/Snapshoot Portfolio 2.svg',
    body: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: [
      'html',
      'ruby on rails',
      'css',
      'javaScript',
    ],
  },
  {
    title: 'Facebook 360',
    client: 'Canopy',
    role: 'Back end dev',
    year: '2022',
    image: 'assets/images/Snapshoot Portfolio.svg',
    body: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: [
      'html',
      'ruby on rails',
      'css',
      'javaScript',
    ],
  },
  {
    title: 'Uber Navigation',
    client: 'Uber',
    role: 'Lead developer',
    year: '2022',
    image: 'assets/images/Snapshoot Portfolio 3.svg',
    body: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: [
      'html',
      'css',
      'javaScript',
    ],
  },
];
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

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const namePattern = /^[a-zA-Z ]+$/

const submitButton = document.getElementById('submit-button');
const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function() {
  this.value = this.value.toLowerCase();
});

const formContent = document.getElementById('contact-form')

formContent.addEventListener('submit', (e) => {
  const nameInput = formContent.querySelector('#name-input').value;
  const emailInput = formContent.querySelector('#email').value;
  console.log(nameInput);
  console.log(emailInput);
  if (nameInput != null && emailInput != null) {
    if (namePattern.test(nameInput) === false || emailPattern.test(emailInput) === false) {
      e.preventDefault();
    } else {
      formContent.submit();
    }
  }
})


// function formValidation() {
//   console.log('start');
//   const formContent = document.getElementById('contact-form')
//   const nameInput = formContent.querySelector('#name-input').value;
//   const emailInput = formContent.querySelector('#email').value;
//   console.log(formContent);
//   console.log(nameInput);
//   console.log(emailInput);
//   if (nameInput != null && emailInput != null) {
//     if (namePattern.test(nameInput) === true || emailPattern.test(emailInput) === true) {
//       this.submit();
//     } else {
//       console.log('Error');
//     }
//   }
// }

// submitButton.addEventListener('click', (e) => {
//   console.log('start');
//   const formContent = document.getElementById('contact-form')
//   const nameInput = formContent.querySelector('#name-input').value;
//   const emailInput = formContent.querySelector('#email').value;
//   console.log(formContent);
//   console.log(nameInput);
//   console.log(emailInput);
//   if (nameInput != null && emailInput != null) {
//     if (namePattern.test(nameInput) === false || emailPattern.test(emailInput) === false) {
//       e.preventDefault();
//     } else {
//       console.log('Error');
//     }
//   } else {
//     console.log('Error');
//   }
// });


// Work section dynamic generator

workData.forEach((work) => {
  const workEntry = document.createElement('div');
  workEntry.className = 'grid-container-card m20px border-card bg-white p5vh';
  workEntry.innerHTML = `<div class="grid-item-picture"> <img class="border-10px fill-100" src="${work.image}" alt="Canopy project snapshot"> </div> <div class="grid-item-content flex flex-column"> <h2 class="p10px">${work.title}</h2> <div class="flex aic"> <h4 class="p10px client">${work.client}</h4> <img src="assets/images/Counter.svg" alt="Spacer"> <h5 class="p10px role">${work.role}</h5> <img src="assets/images/Counter.svg" alt="Spacer"> <h5 class="p10px year">${work.year}</h5> </div> <p class="p10px m0">${work.body}</p> <ul class="xul aic"> </ul> <div> <button>See project</button> </div> </div>`;
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
