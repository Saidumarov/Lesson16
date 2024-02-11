let cardW_one = document.getElementById("cards_w");
let cardW2 = document.getElementById("card2");
let addProducts = document.getElementById("addProduct");
let addSvg = `

          <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.83325 28C7.83325 26.1591 9.32564 24.6667 11.1666 24.6667C13.0075 24.6667 14.4999 26.1591 14.4999 28C14.4999 29.841 13.0075 31.3333 11.1666 31.3333C9.32564 31.3333 7.83325 29.841 7.83325 28ZM11.1666 26C10.062 26 9.16659 26.8954 9.16659 28C9.16659 29.1046 10.062 30 11.1666 30C12.2712 30 13.1666 29.1046 13.1666 28C13.1666 26.8954 12.2712 26 11.1666 26Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.8333 28C23.8333 26.1591 25.3256 24.6667 27.1666 24.6667C29.0075 24.6667 30.4999 26.1591 30.4999 28C30.4999 29.841 29.0075 31.3333 27.1666 31.3333C25.3256 31.3333 23.8333 29.841 23.8333 28ZM27.1666 26C26.062 26 25.1666 26.8954 25.1666 28C25.1666 29.1046 26.062 30 27.1666 30C28.2712 30 29.1666 29.1046 29.1666 28C29.1666 26.8954 28.2712 26 27.1666 26Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.83341 0.666672C1.46522 0.666672 1.16675 0.965149 1.16675 1.33334C1.16675 1.70153 1.46522 2.00001 1.83341 2.00001H6.60743C7.61719 7.72197 8.63785 13.4191 9.49916 19.1611C9.74392 20.7929 11.1456 22 12.7956 22H26.313C27.9019 22 29.27 20.8785 29.5816 19.3204L31.5005 9.72557C31.7481 8.48799 30.8015 7.33334 29.5394 7.33334H10.0474C9.64342 7.33334 9.27071 7.45202 8.95923 7.65458L7.82327 1.21748C7.76705 0.89891 7.49024 0.666672 7.16675 0.666672H1.83341ZM9.38808 9.43223C9.32762 9.02916 9.63979 8.66667 10.0474 8.66667H29.5394C29.9601 8.66667 30.2756 9.05155 30.1931 9.46408L28.2741 19.0589C28.0872 19.9938 27.2663 20.6667 26.313 20.6667H12.7956C11.8056 20.6667 10.9646 19.9424 10.8177 18.9634L9.38808 9.43223Z"
                    fill="white"
                  />
                </svg>
`;
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
      addProducts.innerHTML = `
           <button class="product_btn" onclick="addProduct('${el?.id}', '${el?.images}', '${el?.name}', '${el?.category}', '${el?.description}', '${el?.price}', '${el?.discount}', '${el?.rating}')">
              <span>
                ${addSvg}
               </span>
                   <p>В корзину</p>
          </button>
      
      `;
    }
  });
};

let carts = localStorage.getItem("cart");
let cartLocal = carts ? JSON.parse(carts) : {};
let topLength = document.getElementById("cartLength");
topLength.innerHTML = cartLocal.length ? cartLocal.length : 0;

const addProduct = (id, img, name, category, dec, price, dis, riting) => {
  let cart = localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];
  const isExistingProduct = cart.some((product) => product.id === id);
  if (!isExistingProduct) {
    cart.push({ id, img, name, category, dec, price, dis, riting });
    localStorage.setItem("cart", JSON.stringify(cart));
    topLength.innerHTML = cart.length;
  } else {
    confirm("Bu mahsulot allaqachon savatchada mavjud.");
  }
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

function userOn() {
  document.querySelector(".show_modal").classList.add("active");
}

function userOf() {
  document.querySelector(".show_modal").classList.remove("active");
}

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

let katalog = document.querySelector(".katalog");
katalog.addEventListener("click", () => {
  katalog.classList.toggle("active");
  document.querySelector(".katalog_wrapper").classList.toggle("active");
});
