const text1_options = [
  "Hawaïenne",
  "Pepperoni",
  "reine"
];
const text2_options = [
  "sauce tomate,jambon,fromage,ananas",
  "sauce tomate,pepperoni,fromage",
  "sauce tomate,jambon,fromage,champignons"
];
const color_options = ["#da251d", "#da251d", "#da251d", "#da251d"];
const image_options = [
  "img/pizza.png",
  "img/pizza.png",
  "img/pizza.png"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};


/*------------------overlay menu--------------------*/

const showmenu = document.getElementById("show-menu");
const hidemenu = document.getElementById("hide-menu");
const menuoverlay = document.querySelector(".menu-overlay");

showmenu.addEventListener('click', () => menuoverlay.classList.add("show-overlay"));
hidemenu.addEventListener('click', () => menuoverlay.classList.remove("show-overlay"));
