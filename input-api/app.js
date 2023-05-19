const myform = document.querySelector(".myform");
const myinput = document.querySelector(".myinput");
const newcreat = document.querySelector(".newcreat");

async function Myfetch() {
  const response = await fetch("https://northwind.vercel.app/api/customers")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
        if (
          element.contactName
            .toLocaleLowerCase()
            .includes(myinput.value.toLocaleLowerCase())
        ) {
          newcards(element.contactName);
        }
        // console.log(element.contactName);
      });
    });
}

myform.addEventListener("keyup", function () {
  Myfetch();
  console.clear();
  newcreat.innerHTML = "";
});

function newcards(data) {
  const mydiv = document.createElement("div");
  const myp = document.createElement("p");

  myp.innerText = data;

  mydiv.append(myp);

  mydiv.classList.add("cards");
  newcreat.appendChild(mydiv);
}
