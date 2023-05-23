const galerylow = document.querySelector(".galery-low");
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");

let a = -20;
btnright.addEventListener("click", function () {
  a -= 490;
  if (a < -980) {
    a = 0;
  }
  galerylow.style.cssText = `
    left:${a}px;
    `;
});
btnleft.addEventListener("click", function () {
  a += 490;
  if (a > 0) {
    a = -490;
  }
  galerylow.style.cssText = `
           left:${a}px;
           `;
});

const obj = {
  id: "children",
  img: [
    {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_3.jpg.webp",
      name: "Mark",
      years: "12 yrs.old",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_5.jpg.webp",
      name: "Ben",
      years: "14 yrs.old",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_4.jpg.webp",
      name: "Jessa",
      years: "13 yrs.old",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_1.jpg.webp",
      name: "Edward",
      years: "14 yrs.old",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_2.jpg.webp",
      name: "Melissa",
      years: "12 yrs.old",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_3.jpg.webp",
      name: "Mark",
      years: "6 yrs.old",
    },
  ],
};
async function myfetch() {
  const responsedata = await fetch(
    "https://northwind.vercel.app/api/categories"
  );
  const data = await responsedata.json();

  data.forEach((element) => {
    if (element.id === "children") {
      element.img.forEach((e) => {
        newcreat(e);
      });
    }
  });
  console.log("salam");
}

// function myfetch(obj) {
//   fetch("https://northwind.vercel.app/api/categories", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }
// function myfetch(obj) {
//   fetch("https://northwind.vercel.app/api/categories/children", {
//     method: "DELETE",
//   });
// }

myfetch();

function newcreat(element) {
  const mydiv = document.createElement("div");
  const img = document.createElement("img");
  const myp = document.createElement("p");
  const p = document.createElement("p");
  mydiv.classList.add("newdiv");
  img.src = element.img_src;
  myp.innerText = element.name;
  p.innerText = element.years;
  mydiv.append(img, myp, p);
  galerylow.appendChild(mydiv);
}
