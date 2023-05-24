const btnAdd = document.querySelector(".btnAdd");
const btnRemov = document.querySelector(".btnRemov");
const myUl = document.querySelector(".my-ul");
const newimg = document.querySelector(".newimg");

btnAdd.addEventListener("click", function () {
  myUl.classList.add("display");
});
btnRemov.addEventListener("click", function () {
  myUl.classList.remove("display");
});

async function myfetch() {
  const responsedata = await fetch("http://localhost:3000/post");
  const data = await responsedata.json();

  data.forEach((element) => {
    console.log(element);
    element.img.forEach((e) => {
      newcreat(e);
    });
  });
}

function newcreat(element) {
  const mydiv = document.createElement("div");
  const img = document.createElement("img");
  const myp = document.createElement("p");
  const p = document.createElement("p");
  mydiv.classList.add("inimg");
  img.src = element.img_src;
  myp.innerText = element.name;
  p.innerText = element.years;
  mydiv.append(img, myp, p);
  newimg.appendChild(mydiv);
}

myfetch();
