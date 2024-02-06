// async function fetchData() {
//   try {
//     const module = await import(
//       "../../ecommerce-dom-master/js/categories-data.js"
//     );
//     const data = module.default;
//     populateImages(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// fetchData();

const categories = [
  {
    id: 1,
    img: "../../ecommerce-dom-master/assets/images/category/1.png",
  },
  {
    id: 2,
    img: "../../ecommerce-dom-master/assets/images/category/2.png",
  },
  {
    id: 3,
    img: "../../ecommerce-dom-master/assets/images/category/3.png",
  },
  {
    id: 4,
    img: "../../ecommerce-dom-master/assets/images/category/4.png",
  },
  {
    id: 5,
    img: "../../ecommerce-dom-master/assets/images/category/5.png",
  },
  {
    id: 6,
    img: "../../ecommerce-dom-master/assets/images/category/6.png",
  },
  {
    id: 7,
    img: "../../ecommerce-dom-master/assets/images/category/7.png",
  },
  {
    id: 8,
    img: "../../ecommerce-dom-master/assets/images/category/8.png",
  },
  {
    id: 9,
    img: "../../ecommerce-dom-master/assets/images/category/9.png",
  },
  {
    id: 10,
    img: "../../ecommerce-dom-master/assets/images/category/10.png",
  },
  {
    id: 11,
    img: "../../ecommerce-dom-master/assets/images/category/11.png",
  },
  {
    id: 12,
    img: "../../ecommerce-dom-master/assets/images/category/12.png",
  },
  {
    id: 13,
    img: "../../ecommerce-dom-master/assets/images/category/13.png",
  },
];

function populateImages(data) {
  data.forEach((category) => {
    const imgContainer = document.getElementById(`img${category.id}`);
    if (imgContainer) {
      imgContainer.innerHTML = `<img src="${category.img}" alt="${category.id}">`;
    }
  });
}

populateImages(categories);

let katalog = document.querySelector(".katalog");
katalog.addEventListener("click", () => {
  katalog.classList.toggle("active");
  document.querySelector(".katalog_wrapper").classList.toggle("active");
});
