const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navTag = document.querySelector('.navTag');
const navBag = document.querySelector('.navBag');
const navHag = document.querySelector('.navHag');
// eslint-disable-next-line no-use-before-define
openMenu.addEventListener('click', show);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}
closeMenu.addEventListener('click', close);
navTag.addEventListener('click', close);
navBag.addEventListener('click', close);
navHag.addEventListener('click', close);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// eslint-disable-next-line no-unused-vars
const projects = [
  {
    imagePath: './image/90ae33a844e42a629adf3ce9dbbc315f.png',
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    lorem: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    language: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ordinarymack.github.io/Portfolio-Contact-form/',
    sourceLink: 'https://github.com/OrdinaryMack/Portfolio-Contact-form',
  },
  {
    imagePath: './image/679f12c86bb033399c6b604b71698f3c.png',
    title: 'Multi-Post Stories',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    lorem: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    language: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ordinarymack.github.io/Portfolio-Contact-form/',
    sourceLink: 'https://github.com/OrdinaryMack/Portfolio-Contact-form',
  },
  {

    imagePath: './image/0f7f4ed55bb0e54949043dfad6a0f507.png',
    title: 'Facebook 360',
    company: 'Facebook',
    role: 'Back End Dev',
    year: '2015',
    lorem: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    language: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ordinarymack.github.io/Portfolio-Contact-form/',
    sourceLink: 'https://github.com/OrdinaryMack/Portfolio-Contact-form',
  },
  {

    imagePath: './image/0ee55d428834f9c9a8b1f9f45bd8d0c8.png',
    title: 'Uber Navigation',
    company: 'Uber',
    role: 'Back End Dev',
    year: '2015',
    lorem: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    language: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ordinarymack.github.io/Portfolio-Contact-form/',
    sourceLink: 'https://github.com/OrdinaryMack/Portfolio-Contact-form',
  },
];

// Get a reference to the modal and its child elements
const modal = document.getElementById('modal');
const modalTitle = modal.querySelector('.title');
const modalCompany = modal.querySelector('.footer span:nth-child(1)');
const modalRole = modal.querySelector('.footer span:nth-child(3)');
const modalYear = modal.querySelector('.footer span:nth-child(5)');
const modalImage = modal.querySelector('.modal-body img');
const modalDescription = modal.querySelector('.grid-lorem');
const modalSkills = modal.querySelector('.languagessss');
const modalLiveButton = modal.querySelector('.button-container button:nth-child(1)');
const modalSourceButton = modal.querySelector('.button-container button:nth-child(2)');
document.querySelectorAll('.btn').forEach((card) => {
  card.onclick = () => {
    const id = card.getAttribute('title');

    modalTitle.textContent = projects[id].title;
    modalCompany.textContent = projects[id].company;
    modalRole.textContent = projects[id].role;
    modalYear.textContent = projects[id].year;
    modalImage.src = projects[id].imagePath;
    modalDescription.textContent = projects[id].lorem;
    modalSkills.textContent = '';
    modalLiveButton.addEventListener('click', () => {
      window.open(projects[id].liveLink);
    });
    modalSourceButton.addEventListener('click', () => {
      window.open(projects[id].sourceLink);
    });
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < projects[id].language.length; i++) {
      const li = document.createElement('li');
      li.append(projects[id].language[i]);
      modalSkills.append(li);
    }
  };
});
// form
const userName = document.getElementById('name');
const mail = document.getElementById('email');
const form = document.getElementById('contact1');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  const messages = [];

  if (userName.value.trim() === '') {
    messages.push('Name is required.');
    nameError.textContent = 'Name is required.';
  } else {
    nameError.textContent = ''; // Clear the error message
  }

  const mailInput = mail.value;
  if (mailInput !== mailInput.toLowerCase()) {
    e.preventDefault();
    emailError.textContent = 'Email must be in lowercase.';
  } else {
    emailError.textContent = '';
  }
  if (messages.length < 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(', ');
  }
});
// Function to save form data to local storage
function saveFormData() {
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    letters: document.querySelector('.report').value,
  };

  // Convert the data to a JSON string and save it to local storage
  localStorage.setItem('formData', JSON.stringify(formData));
}
function loadFormData() {
  const storedData = localStorage.getItem('formData');

  if (storedData) {
    const formData = JSON.parse(storedData);
    document.getElementById('name').value = formData.name;
    document.getElementById('email').value = formData.email;
    document.querySelector('.report').value = formData.letters;
  }
}

const inputFields = document.querySelectorAll('input');
const textarea = document.querySelector('.report');

inputFields.forEach((input) => {
  input.addEventListener('input', saveFormData);
});

textarea.addEventListener('input', saveFormData);
loadFormData();