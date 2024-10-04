const cartQuantity = document.getElementById("quantity");
const empty_cart = document.getElementById("empty_cart");
const cart_items = document.getElementById("cart_items");
const quantity_arrary = {
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
    increase_quantity(id);
    AddItemToCart(id, name, itemCount.innerText, price);
    addCart(id, name, itemCount.innerText, price);
  });

  decrementButton.addEventListener("click", () => {
    if (itemCount.innerHTML > 0) {
      itemCount.innerHTML = parseInt(itemCount.innerHTML) - 1;
      cartQuantity.innerHTML = parseInt(cartQuantity.innerHTML) - 1;
      decrease_quantity(id);
    }
  });
}
function increase_quantity(id) {
  quantity_arrary[id][0].quantity++;
  // console.log(quantity_arrary);
}
function decrease_quantity(id) {
  if (quantity_arrary[id][0].quantity > 0) {
    quantity_arrary[id][0].quantity--;
  }
  // console.log(quantity_arrary);
}
function AddItemToCart(id, name, quantity, price) {
  if (quantity == 0) {
    return;
  }
  empty_cart.style.display = "none";
  cart_items.style.display = "flex";

  // const newitem = document.createElement("div");
  // newitem.innerHTML = `<div class="cart_item">
  //           <div class="item_info">
  //             <div class="item_name">${name}</div>
  //             <div class="item_quantity_price">
  //               <p class="item_quantity">${quantity}x</p>
  //               <p class="item_price">@$ <span id="item_price${id}"> ${price}</span> </p>
  //               <p class="single_total">$ <span id="item_total">${
  //                 quantity * parseFloat(price)
  //               }</span></p>
  //             </div>
  //           </div>
  //           <img
  //             src="./assets/images/icon-remove-item.svg"
  //             alt="delete"
  //             class="item_delete"
  //           />
  //         </div>`;

  // cart_items.appendChild(newitem);
}

function addCart(id, name, quantity, price) {
  console.log(quantity_arrary[id][0].quantity);
  if (quantity_arrary[id][0].quantity == 1) {
    const newitem = document.createElement("div");
    newitem.innerHTML = `
  <div class="cart_item">
            <div class="item_info">
              <div class="item_name">${name}</div>
              <div class="item_quantity_price">
                <p class="item_quantity"">
                 <span id="item_quantity${id}">${quantity}</span>
                 x</p>
                <p class="item_price">@$ <span id="item_price${id}"> ${price}</span> </p>
                <p class="single_total">$ <span  id="item_total${id}">${
      quantity * parseFloat(price)
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
  } else {
    const item_quantity = document.getElementById(`item_quantity${id}`);
    const item_price = document.getElementById(`item_price${id}`);
    const item_total = document.getElementById(`item_total${id}`);
    item_quantity.innerHTML = quantity;
    item_price.innerHTML = price;
    item_total.innerHTML = quantity * parseFloat(price);
  }
}
