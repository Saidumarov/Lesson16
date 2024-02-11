const card = [
  {
    img: "../../ecommerce-dom-master/assets/images/product/img.png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating.png",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (1).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (2).png",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (3).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (1).png",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (3).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (2).png",
  },
];
const card1 = [
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (4).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating.png",
    narx: "599,99",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (5).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (2).png",
    narx: "44,50",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (6).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (1).png",
    narx: "159,99",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (7).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (2).png",
    narx: "49,39",
  },
];

const card2 = [
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (8).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating.png",
    narx: "77,99",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (5).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (2).png",
    narx: "159,50",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (4).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (1).png",
    narx: "599,99",
  },
  {
    img: "../../ecommerce-dom-master/assets/images/product/img (7).png",
    title: `Lorem ipsum dolor sit amet adipisicing elit. Est, saepe.`,
    img2: "../../ecommerce-dom-master/assets/images/img/rating (2).png",
    narx: "49,39",
  },
];

let cardW = document.querySelector(".cards_w");

let ui = "";
card?.map(
  (el) =>
    (ui += `     
         <div class="card">
            <div class="card_img">
              <img class="im"
              src="${el?.img}"
              alt="" />
            </div>
            <div class="card_dec">
              <div class="card_d">
                <img
                  class="img_one"
                  src="./ecommerce-dom-master/assets/images/product/Frame 139.png"
                  alt=""
                />
                <p>${el?.title}</p>
                <img
                  class="livel"
                  src="${el?.img2}"
                  alt=""
                />
                <button>В корзину</button>
              </div>
            </div>
          </div>            
            `)
);
cardW.innerHTML = ui;

let cardW1 = document.getElementById("card1");
let cardW2 = document.getElementById("card2");

let ui1 = "";
card1?.map(
  (el) =>
    (ui1 += `     
         <div class="card">
            <div class="card_img">
              <img class="im"
              src="${el?.img}"
              alt="" />
            </div>
            <div class="card_dec" >
              <div class="card_d" id="card_top">
              <h3>${el?.narx} ₽</h3>
                <p>${el?.title}</p>
                <img
                  class="livel"
                  src="${el?.img2}"
                  alt=""
                />
                <button>В корзину</button>
              </div>
            </div>
          </div>            
            `)
);
cardW1.innerHTML = ui1;

let ui2 = "";
card2?.map(
  (el) =>
    (ui2 += `     
         <div class="card">
            <div class="card_img">
              <img class="im"
              src="${el?.img}"
              alt="" />
            </div>
            <div class="card_dec" >
              <div class="card_d" id="card_top">
              <h3>${el?.narx} ₽</h3>
                <p>${el?.title}</p>
                <img
                  class="livel"
                  src="${el?.img2}"
                  alt=""
                />
                <button>В корзину</button>
              </div>
            </div>
          </div>            
            `)
);

cardW2.innerHTML = ui2;

let katalog = document.querySelector(".katalog");
katalog.addEventListener("click", () => {
  katalog.classList.toggle("active");
  document.querySelector(".katalog_wrapper").classList.toggle("active");
});

let inputResault = document.querySelector(".inputResult");
async function fetchData() {
  try {
    const module = await import(
      "../../ecommerce-dom-master/js/products-data.js"
    );
    const data = module.default;

    let input = document.getElementById("search");

    input.addEventListener("input", (e) => {
      let value = e.target.value.trim().toLowerCase();
      let filteredData = data.filter((el) =>
        el?.name.toLowerCase().includes(value)
      );

      // Clear previous results
      inputResault.innerHTML = "";
      if (value !== "") {
        inputResault.classList.add("active");
      } else {
        inputResault.classList.remove("active");
      }
      // Check if there are filtered results
      if (filteredData.length === 0) {
        inputResault.innerHTML = "<p>No matching products found.</p>";
      } else {
        // Display filtered results
        filteredData.forEach((el) => {
          inputResault.innerHTML += `<a href='../../pages/products.html'>
        ${el.name}
          </a>`;
        });
      }
    });
  } catch (e) {
    console.error(e);
  }
}

fetchData();
let carts = localStorage.getItem("cart");
let cartLocal = carts ? JSON.parse(carts) : {};
let topLength = document.getElementById("cartLength");
topLength.innerHTML = cartLocal.length;
