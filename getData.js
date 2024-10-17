const url = "./data.json";
const desert_card = document.getElementById("desert-card");
const quantity = document.getElementById("quantity");
const cart_item = document.getElementById("cart_items");
const empty_cart = document.getElementById("empty_cart");
const added_item = document.getElementById("added_item");
const total = document.getElementById("total_price");
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
      add_item.innerHTML = `
       <div class="namePrice">
       <p>${name}</p>
            <div class="quantity_price">
              <p><span id="count${category}">1</span>X</p>
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
        added_item.removeChild(add_item);
        if (quantity.innerHTML >= 1) {
          quantity.innerHTML = Number(quantity.innerHTML) - 1;
        }
        itemCount.innerHTML = 0;
        countCard.style.display = "none";
        buttonCard.style.display = "flex";
        total.innerHTML = Number(`totalcost${category}`.innerText);
      });
    });

    incrementBtn.addEventListener("click", () => {
      itemCount.innerHTML = Number(itemCount.innerHTML) + 1;
      // quantity.innerHTML = Number(quantity.innerHTML) + 1;
      const count = document.getElementById(`count${category}`);
      const cost = document.getElementById(`cost${category}`);
      const totalcost = document.getElementById(`totalcost${category}`);
      count.innerHTML = Number(count.innerHTML) + 1;
      totalcost.innerHTML = Number(count.innerHTML) * Number(cost.innerHTML);
      total.innerHTML = Number(total.innerHTML) + Number(cost.innerHTML);
    });

    const decrementBtn = document.getElementById(`decrement_${category}`);
    decrementBtn.addEventListener("click", () => {
      const count = document.getElementById(`count${category}`);
      const cost = document.getElementById(`cost${category}`);
      const totalcost = document.getElementById(`totalcost${category}`);

      const currentCount = Number(itemCount.innerHTML);
      if (currentCount > 1) {
        count.innerHTML = Number(count.innerHTML) - 1;
        totalcost.innerHTML =
          Number(totalcost.innerHTML) - Number(cost.innerHTML);
        total.innerHTML = Number(total.innerHTML) - Number(cost.innerHTML);
        itemCount.innerHTML = currentCount - 1;
      } else {
        quantity.innerHTML = Number(quantity.innerHTML) - 1;
        buttonCard.style.display = "flex";
        countCard.style.display = "none";
        if (quantity.innerHTML == 0) {
          empty_cart.style.display = "flex";
          cart_item.style.display = "none";
          total.innerHTML = "0";
          added_item.innerHTML = "";
        }
      }
    });
  });
}

getData(url);
