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
const dayElement = document.querySelector('.day');
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
let days = 5;
let hours = 24;
let minutes = 60;
let seconds = 60;
function updateCountDown() {
  seconds--;

  if (seconds <= 0) {
    minutes--;
    seconds = 60;
  }
  if (minutes <= 0) {
    hours--;
    minutes = 60;
  }
  if (hours <= 0) {
    days--;
    hours = 24;
    1;
  }

  dayElement.innerHTML = days < 10 ? `0${days}` : days;
  hourElement.innerHTML = hours < 10 ? `0${hours}` : hours;
  minuteElement.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  // console.log(seconds);
  // console.log(minutes);
}

setInterval(updateCountDown, 1000);

dropdownBtn.addEventListener('click', (e) => {
  dropdownMenu.classList.toggle('content-active');
});
