const btnBar = document.querySelector(".btn-bar");
const myBottom = document.querySelector(".myBottom");
const btnRemov = document.querySelector(".btn-remov");
const navBars = document.querySelector(".Select-ulTag");
const myIcon = document.querySelector(".initial-scale");
const myLeft = document.querySelector(".myLeft");
const linkMenu = document.querySelector(".link-menu");

btnBar.addEventListener("click", function () {
  navBars.classList.add("displayClass");
});

btnRemov.addEventListener("click", function () {
  navBars.classList.remove("displayClass");
});

myBottom.addEventListener("click", function () {
  myBottom.classList.toggle("myTop");
  myIcon.classList.toggle("displayUl");
});
myLeft.addEventListener("click", function () {
  myLeft.classList.toggle("myTop");
  linkMenu.classList.toggle("displayUl");
});
