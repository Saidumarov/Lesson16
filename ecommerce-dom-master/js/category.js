let cardW_one = document.getElementById("cards_w");
let cardW2 = document.getElementById("card2");
document.addEventListener("DOMContentLoaded", async function () {
  const show = document.querySelector("#show img");

  let indicators = document.querySelector(".product_left_img");

  indicators.addEventListener("click", (event) => {
    let imgUrl = event.target.src;
    imgUrl && (show.src = imgUrl);
  });

  try {
    const module = await import(
      "../../ecommerce-dom-master/js/products-data.js"
    );
    const data = module.default;
    productImg(data, indicators);
  } catch (e) {
    console.error(e);
  }
});
let h3 = document.getElementById("h3");
let h2 = document.getElementById("h2");

const productImg = (data, indicators) => {
  let productId = new URLSearchParams(window.location.search).get("id");
  data?.map((el) => {
    if (el?.id == productId) {
      indicators.innerHTML = ` ${el?.images
        ?.map((img) => ` <img src="${img}" />`)
        .join("")}`;
      indicators.firstElementChild.click();
      h3.innerHTML = `${el?.price} ₽`;
      h2.innerHTML = `${el?.price} ₽`;
    }
  });
};

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

console.log(card);
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
                  src="../ecommerce-dom-master/assets/images/product/Frame 139.png"
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
cardW_one.innerHTML = ui;

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
              <h3 style="font-size:18px; padding: 0;">${el?.narx} ₽</h3>
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
