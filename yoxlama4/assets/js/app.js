const myImg = document.querySelector(".my-img");

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
    btnremov.addEventListener("click",function () {
        
    })


  mydiv.append(myimg, newdiv, icon, btndiv, btnremov);

  myImg.appendChild(mydiv);
}

myfetch();


async function fetchdelete(element) {
    
    const response=await fetch("http://localhost:3000/post1",{
        
    })

}

