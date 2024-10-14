const url = "./data.json";
const desert_card = document.getElementById("desert-card");
const quantity = document.getElementById("quantity");
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
      // cartIcon.style.display = "none";
      countCard.style.display = "flex";
      itemCount.innerHTML = 1;
      quantity.innerHTML = Number(quantity.innerHTML) + 1;
    });

    incrementBtn.addEventListener("click", () => {
      itemCount.innerHTML = Number(itemCount.innerHTML) + 1;
      // quantity.innerHTML = Number(quantity.innerHTML) + 1;
    });

    const decrementBtn = document.getElementById(`decrement_${category}`);
    decrementBtn.addEventListener("click", () => {
      const currentCount = Number(itemCount.innerHTML);
      if (currentCount > 1) {
        itemCount.innerHTML = currentCount - 1;
      } else {
        buttonCard.style.display = "flex";
        countCard.style.display = "none";
        quantity.innerHTML = Number(quantity.innerHTML) - 1;
      }
    });
  });
}

getData(url);
