// Waffle
const buttonCardWaffle = document.getElementById("button-card-waffle");
const countCardWaffle = document.getElementById("count-card-waffle");
const incrementWaffle = document.getElementById("increment_waffle");
const decrementWaffle = document.getElementById("decrement_waffle");
const itemCountWaffle = document.getElementById("item_count_waffle");

// Crème Brûlée
const buttonCardBrulee = document.getElementById("button-card-brulee");
const countCardBrulee = document.getElementById("count-card-brulee");
const incrementBrulee = document.getElementById("increment_brulee");
const decrementBrulee = document.getElementById("decrement_brulee");
const itemCountBrulee = document.getElementById("item_count_brulee");

// Macaron Mix
const buttonCardMacaron = document.getElementById("button-card-macaron");
const countCardMacaron = document.getElementById("count-card-macaron");
const incrementMacaron = document.getElementById("increment_macaron");
const decrementMacaron = document.getElementById("decrement_macaron");
const itemCountMacaron = document.getElementById("item_count_macaron");

// Tiramisu
const buttonCardTiramisu = document.getElementById("button-card-tiramisu");
const countCardTiramisu = document.getElementById("count-card-tiramisu");
const incrementTiramisu = document.getElementById("increment_tiramisu");
const decrementTiramisu = document.getElementById("decrement_tiramisu");
const itemCountTiramisu = document.getElementById("item_count_tiramisu");

// Pistachio Baklava
const buttonCardBaklava = document.getElementById("button-card-baklava");
const countCardBaklava = document.getElementById("count-card-baklava");
const incrementBaklava = document.getElementById("increment_baklava");
const decrementBaklava = document.getElementById("decrement_baklava");
const itemCountBaklava = document.getElementById("item_count_baklava");

// Lemon Meringue Pie
const buttonCardPie = document.getElementById("button-card-pie");
const countCardPie = document.getElementById("count-card-pie");
const incrementPie = document.getElementById("increment_pie");
const decrementPie = document.getElementById("decrement_pie");
const itemCountPie = document.getElementById("item_count_pie");

// Red Velvet Cake
const buttonCardRedVelvet = document.getElementById("button-card-redVelvet");
const countCardRedVelvet = document.getElementById("count-card-redVelvet");
const incrementRedVelvet = document.getElementById("increment_redVelvet");
const decrementRedVelvet = document.getElementById("decrement_redVelvet");
const itemCountRedVelvet = document.getElementById("item_count_redVelvet");

// Chocolate Brownie
const buttonCardBrownie = document.getElementById("button-card-brownie");
const countCardBrownie = document.getElementById("count-card-brownie");
const incrementBrownie = document.getElementById("increment_brownie");
const decrementBrownie = document.getElementById("decrement_brownie");
const itemCountBrownie = document.getElementById("item_count_brownie");

// Panna Cotta
const buttonCardPannaCotta = document.getElementById("button-card-pannaCotta");
const countCardPannaCotta = document.getElementById("count-card-pannaCotta");
const incrementPannaCotta = document.getElementById("increment_pannaCotta");
const decrementPannaCotta = document.getElementById("decrement_pannaCotta");
const itemCountPannaCotta = document.getElementById("item_count_pannaCotta");
const cart_quantity = document.getElementById("quantity");

function setupCartItem(id) {
  const buttonCard = document.getElementById(`buttonCard${id}`);
  const countCard = document.getElementById(`countCard${id}`);
  const incrementButton = document.getElementById(`increment_${id}`);
  const decrementButton = document.getElementById(`decrement_${id}`);
  const itemCount = document.getElementById(`item_count_${id}`);
  const cartQuantity = document.getElementById("cart_quantity");

  buttonCard.addEventListener("click", () => {
    countCard.style.display = "flex";
  });

  incrementButton.addEventListener("click", () => {
    itemCount.innerHTML = parseInt(itemCount.innerHTML) + 1;
    cartQuantity.innerHTML = parseInt(cartQuantity.innerHTML) + 1;
  });

  decrementButton.addEventListener("click", () => {
    if (itemCount.innerHTML > 0) {
      itemCount.innerHTML = parseInt(itemCount.innerHTML) - 1;
      cartQuantity.innerHTML = parseInt(cartQuantity.innerHTML) - 1;
    }
  });
}
setupCartItem("Waffle");
setupCartItem("Brulee");
setupCartItem("Macaron");
setupCartItem("Tiramisu");
setupCartItem("Baklava");
setupCartItem("Pie");
setupCartItem("RedVelvet");
setupCartItem("Brownie");
setupCartItem("PannaCotta");
