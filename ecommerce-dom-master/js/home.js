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
