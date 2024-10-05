const url = "./data.json";
const desert_card = document.getElementById("desert-card");
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
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
              <img
                src="${image.desktop}"
                alt="${name}"
                class="product-image"
              />
              <div class="button-card" id="buttonCard${category}">
                <img
                  src="./assets/images/icon-add-to-cart.svg"
                  alt="add_to_cart"
                  class="cart-icon"
                />
                <p class="add">Add to Cart</p>
              </div>
              <div
                class="button-card-count"
                id="countCard${category}"
                style="display: none"
              >
                <img
                  src="./assets/images/icon-increment-quantity.svg"
                  alt="plus"
                  id="increment_${category}"
                  class="icon"
                />
                <p id="item_count_${category}">0</p>
                <img
                  src="./assets/images/icon-decrement-quantity.svg"
                  alt="minus"
                  id="decrement_${category}"
                  class="icon"
                />
              </div>
            </div>
            <div class="product-information">
              <p class="product-title">${category}</p>
              <p class="product-description" id="name${category}">
                ${name}
              </p>
              <p class="product-price">$<span id="price${category}">${price}</span></p>
            </div>
          </div>
    `;
    desert_card.appendChild(card);
  });
}
getData(url);
