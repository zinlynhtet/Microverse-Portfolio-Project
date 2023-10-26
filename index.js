const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navTag = document.querySelector('.navTag');
const navBag = document.querySelector('.navBag');
const navHag = document.querySelector('.navHag');
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
