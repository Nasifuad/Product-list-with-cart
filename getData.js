const url = "./data.json";
const desert_card = document.getElementById("desert-card");
const quantity = document.getElementById("quantity");
const cart_item = document.getElementById("cart_items");
const empty_cart = document.getElementById("empty_cart");
const added_item = document.getElementById("added_item");
const total = document.getElementById("total_price");
const confirm_order = document.getElementById("confirm_order");
const confirm_order_list = document.getElementById("confirm_order_list");
const confirm_btn = document.getElementById("confirm");
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getData(url) {
  const item_array = await fetchData(url);
  console.log(item_array);

  item_array.forEach((item) => {
    const { name, price, image, category } = item;
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="desert-cards">
        <div class="img-addCart">
          <img src="${image.desktop}" alt="${name}" class="product-image" />
          <div class="button-card" id="buttonCard${category}">
            <img src="./assets/images/icon-add-to-cart.svg" alt="add_to_cart" class="cart-icon"  />
            <p class="add">Add to Cart</p>
          </div>
          <div class="button-card-count" id="countCard_${category}" style="display: none">
            <img src="./assets/images/icon-increment-quantity.svg" alt="plus" id="increment_${category}" class="icon" />
            <p id="item_count_${category}">0</p>
            <img src="./assets/images/icon-decrement-quantity.svg" alt="minus" id="decrement_${category}" class="icon" />
          </div>
        </div>
        <div class="product-information">
          <p class="product-title">${category}</p>
          <p class="product-description" id="name_${category}">${name}</p>
          <p class="product-price">$<span id="price_${category}">${price}</span></p>
        </div>
      </div>
    `;
    desert_card.appendChild(card);

    // Add event listeners for cart functionality
    // const cartIcon = document.getElementById(`cartIcon_${category}`);
    const buttonCard = document.getElementById(`buttonCard${category}`);
    const countCard = document.getElementById(`countCard_${category}`);
    const incrementBtn = document.getElementById(`increment_${category}`);
    const itemCount = document.getElementById(`item_count_${category}`);

    buttonCard.addEventListener("click", () => {
      console.log("clicked");
      buttonCard.style.display = "none";
      empty_cart.style.display = "none";
      cart_item.style.display = "flex";
      countCard.style.display = "flex";
      itemCount.innerHTML = 1;
      quantity.innerHTML = Number(quantity.innerHTML) + 1;
      const add_item = document.createElement("div");
      add_item.setAttribute("class", "added_item");
      add_item.setAttribute("id", `cart_item_${category}`);
      add_item.innerHTML = `
       <div class="namePrice">
       <p>${name}</p>
            <div class="quantity_price">
              <p class="count"><span id="count${category}">1</span>X</p>
              <p>@ <span id="cost${category}">${price}</span></p>
              <p>$ <span id="totalcost${category}">${price}</span></p>
            </div>
        </div>
         <img
                src="./assets/images/icon-remove-item.svg"
                alt=""
                id="remove${category}"
              />
      `;
      added_item.appendChild(add_item);
      total.innerHTML = Number(total.innerHTML) + price;
      const remove = document.getElementById(`remove${category}`);
      remove.addEventListener("click", () => {
        // Subtract the correct amount from the total price
        const itemTotalCost = Number(
          document.getElementById(`totalcost${category}`).innerText
        );
        total.innerHTML = Number(total.innerHTML) - itemTotalCost;

        // Remove the item from the cart
        added_item.removeChild(add_item);

        // Update the quantity
        if (quantity.innerHTML >= 1) {
          quantity.innerHTML = Number(quantity.innerHTML) - 1;
        }

        // Reset item count and display the correct buttons
        itemCount.innerHTML = 0;
        countCard.style.display = "none";
        buttonCard.style.display = "flex";

        // If no items left in the cart, reset the cart display
        if (quantity.innerHTML == 0) {
          empty_cart.style.display = "flex";
          cart_item.style.display = "none";
          total.innerHTML = "0"; // Reset total if no items are left
          added_item.innerHTML = ""; // Clear all added items
        }
      });
    });

    incrementBtn.addEventListener("click", () => {
      const count = document.getElementById(`count${category}`);
      const cost = document.getElementById(`cost${category}`);
      const totalcost = document.getElementById(`totalcost${category}`);

      // Increment item count and total cost
      count.innerHTML = Number(count.innerHTML) + 1;
      totalcost.innerHTML = Number(count.innerHTML) * Number(cost.innerHTML);
      total.innerHTML = Number(total.innerHTML) + Number(cost.innerHTML);
      itemCount.innerHTML = Number(itemCount.innerHTML) + 1;
    });

    const decrementBtn = document.getElementById(`decrement_${category}`);
    decrementBtn.addEventListener("click", () => {
      const count = document.getElementById(`count${category}`);
      const cost = document.getElementById(`cost${category}`);
      const totalcost = document.getElementById(`totalcost${category}`);

      // If item count is greater than 1, reduce count
      if (Number(count.innerHTML) > 1) {
        count.innerHTML = Number(count.innerHTML) - 1;
        totalcost.innerHTML =
          Number(totalcost.innerHTML) - Number(cost.innerHTML);
        total.innerHTML = Number(total.innerHTML) - Number(cost.innerHTML);
        itemCount.innerHTML = Number(itemCount.innerHTML) - 1;
      } else {
        // When count reaches 0, remove the item
        quantity.innerHTML = Number(quantity.innerHTML) - 1; // Decrement cart item quantity

        // Hide item count and show 'Add to Cart' button again
        buttonCard.style.display = "flex";
        countCard.style.display = "none";

        total.innerHTML = Number(total.innerHTML) - Number(cost.innerHTML); // Adjust total cost
        const itemToRemove = document.getElementById(`cart_item_${category}`);
        if (itemToRemove) {
          added_item.removeChild(itemToRemove); // Remove the item from the cart
        }
        // If no items are left, reset cart
        if (quantity.innerHTML == 0) {
          empty_cart.style.display = "flex";
          cart_item.style.display = "none";
          total.innerHTML = "0"; // Reset total
          added_item.innerHTML = ""; // Clear cart
        }
      }
    });
    confirm_btn.addEventListener("click", () => {
      confirm_order_list.style.display = "flex";
      confirm_order.style.display = "flex";
      document.getElementById("con").style.display = "block";
      const confirm_item = document.getElementById("confirm_item");
      const added_item = document.getElementById("added_item");
      console.log(total.innerHTML);
      const n = added_item.innerHTML;
      confirm_item.innerHTML = n;
      document.getElementById("final_price_confirm").innerHTML =
        total.innerHTML;

      // total.innerHTML = "0";
    });
    document.getElementById("new").addEventListener("click", () => {
      confirm_order.style.display = "none";
      document.getElementById("con").style.display = "none";
      empty_cart.style.display = "flex";
      cart_item.style.display = "none";
      window.location.reload();
    });
  });
}
getData(url);
