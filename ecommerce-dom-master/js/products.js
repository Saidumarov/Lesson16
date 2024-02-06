let katalog = document.querySelector(".katalog");
katalog.addEventListener("click", () => {
  katalog.classList.toggle("active");
  document.querySelector(".katalog_wrapper").classList.toggle("active");
});

let cardW2 = document.getElementById("all_products");
let ui = "";
async function fetchData() {
  try {
    const module = await import(
      "../../ecommerce-dom-master/js/products-data.js"
    );
    const data = module.default;

    if (typeof ProductData === "function") {
      let input = document.getElementById("search");
      input.addEventListener("input", (e) => {
        let value = e.target.value.toLowerCase();
        const result = data?.filter((el) =>
          el?.name.toLowerCase().includes(value)
        );
        ProductData(result);
      });
      ProductData(data);
    } else {
      console.error("ProductData function is not defined.");
    }
  } catch (e) {
    console.error(e);
  }
}

fetchData();
const ProductData = (data) => {
  let ui = "";
  data?.map((el) => {
    let img = "";
    if (el?.rating >= 5) {
      img = "../../ecommerce-dom-master/assets/images/img/rating.png";
    } else if (el?.rating >= 3) {
      img = "../../ecommerce-dom-master/assets/images/img/rating (2).png";
    } else if (el?.rating >= 1) {
      img = "../../ecommerce-dom-master/assets/images/img/rating (1).png";
    } else {
      img = "../../ecommerce-dom-master/assets/images/img/default-rating.png";
    }
    ui += `
      <div class="card">
        <div class="card_img">
          <img src="../../ecommerce-dom-master/assets/images/img/Button (3).png" class="button3" />
          <img class="im" src="${el?.images[0]}" alt="" />
        </div>
        <div class="card_dec">
          <div class="card_d" id="card_top">
            <h3>${el?.price} ₽</h3>
            <p>${el?.description.substring(0, 60)}</p>
            <img class="livel" src="${img}" alt="" />
            <button>В корзину</button>
          </div>
        </div>
      </div>
    `;
  });

  cardW2.innerHTML = ui;
};
