const galerylow = document.querySelector(".galery-low");
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");

let a = -20;
btnright.addEventListener("click", function () {
  a -= 390;
  if (a < -390) {
    a = 0;
  }
  galerylow.style.cssText = `
    left:${a}px;
    `;
});
btnleft.addEventListener("click", function () {
  a += 390;
  if (a > 0) {
    a = -390;
  }
  galerylow.style.cssText = `
           left:${a}px;
           `;
});

const obj = {
  id: "children",
  img: [
    img1: {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_3.jpg.webp",
      name: "Mark",
      years: "12 yrs.old",
    },
    img2: {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_5.jpg.webp",
      name: "Ben",
      years: "14 yrs.old",
    },
    img3: {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_4.jpg.webp",
      name: "Jessa",
      years: "13 yrs.old",
    },
    img4: {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_1.jpg.webp",
      name: "Edward",
      years: "14 yrs.old",
    },
    img5: {
      img_src:
        "https://preview.colorlib.com/theme/adopted/img/children_2.jpg.webp",
      name: "Melissa",
      years: "12 yrs.old",
    },
    img6: {
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
      console.log(element.img.img1);
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

myfetch();
