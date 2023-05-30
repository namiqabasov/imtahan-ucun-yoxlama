const mybtn = document.querySelector(".mybtn");
const myul = document.querySelector(".myul");
const mycards = document.querySelector(".mycards");

mybtn.addEventListener("click", function () {
  myul.classList.toggle("display");
});

async function myfetch() {
  const respons = await fetch("http://localhost:3000/post");
  const data = await respons.json();

  data.forEach((element) => {
    createname(element);
  });
}

function createname(data) {
  const mydiv = document.createElement("div");
  mydiv.classList.add("cards");

  const myimg = document.createElement("img");
  const myp1 = document.createElement("p");
  const myp2 = document.createElement("p");
  const myp3 = document.createElement("p");
  const buttonremov = document.createElement("button");
  const buttonedit = document.createElement("button");

  buttonremov.innerText = "REMOVE";
  buttonedit.innerText = "EDIT";

  buttonremov.addEventListener("click", () => {
    mydelete(data.id);
    window.location.reload();
  });
  buttonedit.addEventListener("click", () => {
    const id = document.querySelector("#id");
    const img = document.querySelector("#img");
    const myname = document.querySelector("#name");
    const time = document.querySelector("#time");

    if (
      id.value === "" ||
      img.value === "" ||
      myname.value === "" ||
      time.value === ""
    ) {
      alert("melumatlari doldurun");
    } else {
      const obj1 = {
        id: id.value,
        img: img.value,
        name: myname.value,
        commend: "inappropriate behavior ipsum dolor sit amet, consectetur.",
        time: time.value,
      };
      async function myput(b) {
        const respons = await fetch(`http://localhost:3000/post/${b}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj1),
        });
      }

      myput(data.id);

      window.location.reload();
    }
  });

  myimg.src = data.img;
  myp1.innerText = data.time;
  myp1.classList.add("time");

  myp2.innerText = data.name;
  myp2.classList.add("hilton");

  myp3.innerText = data.commend;
  myp3.classList.add("lorem");
  mydiv.append(myimg, myp1, myp2, myp3, buttonremov, buttonedit);

  mycards.appendChild(mydiv);
}

myfetch();

async function mydelete(a) {
  const respons = await fetch(`http://localhost:3000/post/${a}`, {
    method: "DELETE",
  });
}

const myform = document.querySelector(".myform");

myform.addEventListener("submit", () => {
  const id = document.querySelector("#id");
  const img = document.querySelector("#img");
  const myname = document.querySelector("#name");
  const time = document.querySelector("#time");
  if (
    id.value === "" ||
    img.value === "" ||
    myname.value === "" ||
    time.value === ""
  ) {
    alert("MELUMATLARI TAM DAXIL EDIN");
  } else {
    const obj = {
      id: id.value,
      img: img.value,
      name: myname.value,
      commend: "inappropriate behavior ipsum dolor sit amet, consectetur.",
      time: time.value,
    };
    async function mypost() {
      const respons = await fetch(`http://localhost:3000/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
    }
    mypost();
  }
  window.location.reload();
});
