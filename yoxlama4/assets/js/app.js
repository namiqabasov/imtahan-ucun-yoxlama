const myImg = document.querySelector(".my-img");

function myscrol() {
  const ecran = window.scrollY;
  console.log(ecran);
  if (ecran < 150) {
    document.querySelector("nav").classList.remove("yenireng");
  } else {
    document.querySelector("nav").classList.add("yenireng");
  }
}

window.addEventListener("scroll", myscrol);

async function myfetch() {
  const response = await fetch("http://localhost:3000/post1");
  const data = await response.json();

  data.forEach((element) => {
    newcrete(element);
  });
}

function newcrete(element) {
  const mydiv = document.createElement("div");
  const myimg = document.createElement("img");

  mydiv.classList.add("newimg");
  myimg.src = element.img;

  const newdiv = document.createElement("div");
  const myh2 = document.createElement("h2");
  const nevp = document.createElement("p");
  myh2.innerText = element.name;
  nevp.innerText = element.input;

  newdiv.append(myh2, nevp);

  const btndiv = document.createElement("div");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  const btn4 = document.createElement("button");
  const btn5 = document.createElement("button");

  btndiv.classList.add("mybtn");

  btn1.innerText = element.buttonname1;
  btn2.innerText = element.buttonname2;
  btn3.innerText = element.buttonname3;
  btn4.innerText = element.buttonname4;
  btn5.innerText = element.buttonname5;

  const icon = document.createElement("div");
  const iconimg1 = document.createElement("img");
  const iconimg2 = document.createElement("img");
  const iconimg3 = document.createElement("img");
  const iconimg4 = document.createElement("img");
  const iconimg5 = document.createElement("img");
  iconimg1.src = "assets/img/img1.png";
  iconimg2.src = "assets/img/img2.png";
  iconimg3.src = "assets/img/img3.png";
  iconimg4.src = "assets/img/img4.png";
  iconimg5.src = "assets/img/img5.png";

  icon.append(iconimg1, iconimg2, iconimg3, iconimg4, iconimg5);
  btndiv.append(btn1, btn2, btn3, btn4, btn5);

  const btnremov = document.createElement("button");

  btnremov.innerText = "REMOVE";
  btnremov.addEventListener("click", function () {
    fetchdelete(element.id);
  });

  mydiv.append(myimg, newdiv, icon, btndiv, btnremov);

  myImg.appendChild(mydiv);
}

myfetch();

async function fetchdelete(element) {
  const response = await fetch(`http://localhost:3000/post1/${element}`, {
    method: "DELETE",
  });
}

const myinput = document.querySelector("#myinput");
const impid = document.querySelector("#impid");
const img = document.querySelector("#img");
const myform = document.querySelector(".myform");

myform.addEventListener("submit", function () {
  const obj = {
    id: impid.value,
    img: img.value,
    name: myinput.value,
    input:
      "Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.",
    buttonname1: "Hottub",
    buttonname2: "Swimming Pool",
    buttonname3: "Garden",
    buttonname4: "Patio",
    buttonname5: "Hard Wood Floor",
  };

  async function fetchpost() {
    const response = await fetch(`http://localhost:3000/post1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
  fetchpost();
});

// async function fetchput(element) {
//   const response = await fetch(`http://localhost:3000/post1/${element}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }
