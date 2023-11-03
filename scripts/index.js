// event listener for the navigation hamburger menu
let hamB = document.querySelector('.ham-b');
let menu = document.querySelector('.menu');
let logoMain = document.querySelector('.logo-main');

// function to change the css style of the hamburger
hamB.addEventListener('click', () => {
  hamB.classList.toggle('activeHam-b');
  menu.classList.toggle('menu-active');
});

let dropdownBtn = document.querySelector('.dropdownBtn');
let dropdownMenu = document.querySelector('.content');

dropdownBtn.addEventListener('click', (e)=>{
  dropdownMenu.classList.toggle('content-active')
})