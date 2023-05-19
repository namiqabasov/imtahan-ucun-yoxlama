const cartExpert = document.querySelector(".cart-expert");
const inputname = document.querySelector(".myinput");
const btn = document.querySelector(".btn");

async function Myfetch() {
  const response = await fetch("https://northwind.vercel.app/api/customers")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
        if (
          inputname.value.toLocaleLowerCase()[0] ===
            element.contactName.toLocaleLowerCase()[0] &&
          inputname.value.toLocaleLowerCase()[1] ===
            element.contactName.toLocaleLowerCase()[1]
        ) {
          createCartelement(element);
        } else if (
          inputname.value.toLocaleLowerCase()[0] ===
            element.contactName.toLocaleLowerCase()[0] &&
          !inputname.value.toLocaleLowerCase()[1]
        ) {
          createCartelement(element);
        } else if (inputname.value === "") {
          createCartelement(element);
        }
      });
    });
}

btn.addEventListener("click", function () {
  cartExpert.innerHTML = "";
  Myfetch();
});

function createCartelement(data) {
  const myDiv = document.createElement("div");
  const myimg = document.createElement("img");
  const myPtag1 = document.createElement("p");
  const myPtag2 = document.createElement("p");
  const button = document.createElement("button");
  const atag = document.createElement("a");

  button.innerText = "Know More";
  myimg.src = "assets/img/download (1).jfif";
  myPtag1.innerText = data.contactName;
  myPtag2.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit vitae od";

  myDiv.className = "mycart";
  myPtag1.className = "name";
  myPtag2.className = "input";
  button.className = "btn";
  atag.href = `page.html#${data.id}`;
  atag.innerText = "link";
  atag.style.color = "black";
  myDiv.append(myimg, myPtag1, myPtag2, button, atag);

  cartExpert.append(myDiv);
}
