const mayCloud = document.querySelector(".may-Cloud");

const obj = {
  id: "children",
  img: [
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-1.png",
      name: "Cloud Hosting",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-2.png",
      name: "Web Hosting",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-3.png",
      name: "Share Hosting",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-4.png",
      name: "VPS Server",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-5.png",
      name: "WHCMS",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-6.png",
      name: "24/7 Support",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-7.png",
      name: "Windows Hosting",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img_src:
        "https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-8.png",
      name: "Database Hosting",
      years:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
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

function myfetchpost(obj) {
  fetch("https://northwind.vercel.app/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
function myfetch(obj) {
  fetch("https://northwind.vercel.app/api/categories/children", {
    method: "DELETE",
  });
}
// async function myfetch() {
//   const responsedata = await fetch(
//     "https://northwind.vercel.app/api/categories"
//   );
//   const data = await responsedata.json();

//   data.forEach((element) => {
//     if (element.id === "children") {
//       element.img.forEach((e) => {
//         newcreat(e);
//       });
//     }
//   });
//   console.log("salam");
// }
function newcreat(element) {
  const mydiv = document.createElement("div");
  const img = document.createElement("img");
  const myp = document.createElement("p");
  const p = document.createElement("p");
  mydiv.classList.add("newdiv");
  img.src = element.img_src;
  myp.innerText = element.name;
  myp.classList.add("mytag");
  p.innerText = element.years;
  mydiv.append(img, myp, p);
  mayCloud.appendChild(mydiv);
}
myfetch();
