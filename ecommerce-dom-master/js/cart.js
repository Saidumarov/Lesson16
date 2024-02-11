let cart = document.querySelector(".cart_left_w");
let count = {};
let carts = localStorage.getItem("cart");
let cartLocal = carts ? JSON.parse(carts) : {};

const fetchDataCart = () => {
  let ui = "";
  cartLocal?.forEach((el, index) => {
    const itemCount = count[index] || 1;
    count[index] = itemCount;
    ui += `
      <div class="cart_left_cat">
        <img src="${el?.img.substring(171)}" alt="" />
        <div class="b">
          <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
          <p>44,50₽ за шт.</p>
        </div>
        <div class="b1">
          <div class="b1btn">
            <button onclick="dic(${index})">-</button>
            <p>${itemCount}</p>
            <button onclick="inc(${index})">+</button>
          </div>
          <p class="pric">89,00 ₽</p>
        </div>
      </div>`;
  });
  cart.innerHTML = ui;
};

fetchDataCart();

function inc(index) {
  count[index]++;
  fetchDataCart();
}

function dic(index) {
  if (count[index] > 1) {
    count[index]--;
    fetchDataCart();
  } else if (count[index] === 1) {
    const confirmDelete = confirm("Bu mahsulotni o'chirmoqchimisiz?");
    if (confirmDelete) {
      delete count[index];
      updateLocalStorage(index);
    }
  }
}

function updateLocalStorage(index) {
  cartLocal.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartLocal));
  fetchDataCart();
}
