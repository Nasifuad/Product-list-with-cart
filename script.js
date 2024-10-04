const cartQuantity = document.getElementById("quantity");
const empty_cart = document.getElementById("empty_cart");
const cart_items = document.getElementById("cart_items");
const cart_item_arrary = {
  Waffle: [{ quantity: 0 }],
  Brulee: [{ quantity: 0 }],
  Macaron: [{ quantity: 0 }],
  Tiramisu: [{ quantity: 0 }],
  Baklava: [{ quantity: 0 }],
  Pie: [{ quantity: 0 }],
  RedVelvet: [{ quantity: 0 }],
  Brownie: [{ quantity: 0 }],
  PannaCotta: [{ quantity: 0 }],
};

setupCartItem("Waffle");
setupCartItem("Brulee");
setupCartItem("Macaron");
setupCartItem("Tiramisu");
setupCartItem("Baklava");
setupCartItem("Pie");
setupCartItem("RedVelvet");
setupCartItem("Brownie");
setupCartItem("PannaCotta");

function setupCartItem(id) {
  const name = document.getElementById(`name${id}`).innerText;
  const price = document.getElementById(`price${id}`).innerText;
  const buttonCard = document.getElementById(`buttonCard${id}`);
  const countCard = document.getElementById(`countCard${id}`);
  const incrementButton = document.getElementById(`increment_${id}`);
  const decrementButton = document.getElementById(`decrement_${id}`);
  const itemCount = document.getElementById(`item_count_${id}`);

  buttonCard.addEventListener("click", () => {
    countCard.style.display = "flex";
  });

  incrementButton.addEventListener("click", () => {
    itemCount.innerHTML = parseInt(itemCount.innerHTML) + 1;
    cartQuantity.innerHTML = parseInt(cartQuantity.innerHTML) + 1;
    AddItemToCart(id, name, itemCount.innerText, price);
  });

  decrementButton.addEventListener("click", () => {
    if (itemCount.innerHTML > 0) {
      itemCount.innerHTML = parseInt(itemCount.innerHTML) - 1;
      cartQuantity.innerHTML = parseInt(cartQuantity.innerHTML) - 1;
    }
  });
}

function AddItemToCart(id, name, quantity, price) {
  // if (quantity == 0) {
  //   return;
  // }
  empty_cart.style.display = "none";
  cart_items.style.display = "flex";
  cart_item_arrary[id][0].quantity++;
  // cart_item_arrary[id[0]]++;
  console.log(id, cart_item_arrary[id][0]);
  const newitem = document.createElement("div");
  newitem.innerHTML = `
  <div class="cart_item">
            <div class="item_info">
              <div class="item_name">${name}</div>
              <div class="item_quantity_price">
                <p class="item_quantity">${quantity}x</p>
                <p class="item_price">@$ <span id="item_price${id}">${price}</span> </p>
                <p class="single_total">$ <span id="item_total">${
                  quantity * price
                }"></span></p>
              </div>
            </div>
            <img
              src="./assets/images/icon-remove-item.svg"
              alt="delete"
              class="item_delete"
            />
          </div>`;
  cart_items.appendChild(newitem);
}
