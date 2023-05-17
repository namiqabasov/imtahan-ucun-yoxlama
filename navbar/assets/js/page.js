const cartsCostumers = document.querySelector(".cart-expert");
async function Myfetch() {
  const response = await fetch(
    `https://northwind.vercel.app/api/customers/${window.location.hash.slice(
      1
    )}`
  )
    .then((res) => res.json())
    .then((data) => {
      createCartelement(data);
      console.log();
    });
}

function createCartelement(data) {
  const myDiv = document.createElement("div");
  const myimg = document.createElement("img");
  const myPtag1 = document.createElement("p");
  const myPtag2 = document.createElement("p");
  const button = document.createElement("p");

  button.innerText = data.address.street;

  myPtag1.className = "name";
  myPtag2.className = "input";
  button.className = "input";
  myDiv.className = "mycart";
  myDiv.classList.add("newclass");
  

  myimg.src = "assets/img/download (1).jfif";
  myPtag1.innerText = data.contactName;
  myPtag2.innerText = data.contactTitle;

  myDiv.append(myimg, myPtag1, myPtag2, button);

  cartsCostumers.append(myDiv);
}

Myfetch();
