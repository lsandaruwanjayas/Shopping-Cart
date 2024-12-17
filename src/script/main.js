const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const toyCards = document.getElementById("toy-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "FPV Drone",
    price: 32.99,
    category: "Vehicle",
    productImage: "./src/images/fpv-drone.png",
  },
  {
    id: 2,
    name: "Magic-cube",
    price: 10.99,
    category: "Puzzle",
    productImage: "./src/images/magic-cube.png",
  },
  {
    id: 3,
    name: "Mechanical Dog",
    price: 45.99,
    category: "Pet",
    productImage: "./src/images/mechanical-dog.png",
  },
  {
    id: 4,
    name: "Motorcycle Toy",
    price: 33.99,
    category: "Vehicle",
    productImage: "./src/images/motorcycle-toy.png",
  },
  {
    id: 5,
    name: "Sonic Plush Toy",
    price: 8.99,
    category: "Toy",
    productImage: "./src/images/sonic-plush-toy.png",
  },
  {
    id: 6,
    name: "Speed Car",
    price: 29.99,
    category: "Vehicle",
    productImage: "./src/images/speed-car.png",
  },
  {
    id: 7,
    name: "Spinning Top",
    price: 6.99,
    category: "Widget",
    productImage: "./src/images/spinning-top.png",
  },
  {
    id: 8,
    name: "Tiitanic Puzzle",
    price: 18.99,
    category: "Vehicle",
    productImage: "./src/images/tiitanic-puzzle.png",
  },
  {
    id: 9,
    name: "Trumpet",
    price: 15.99,
    category: "Musical",
    productImage: "./src/images/trumpet.png",
  },
  {
    id: 10,
    name: "Wooden Abacus",
    price: 14.99,
    category: "Puzzle",
    productImage: "./src/images/wooden-abacus.png",
  },
  {
    id: 11,
    name: "Antistress Relief Dice",
    price: 11.99,
    category: "Widget",
    productImage: "./src/images/antistress-relief-dice.png",
  },
  {
    id: 12,
    name: "Video Game Console",
    price: 34.99,
    category: "Widget",
    productImage: "./src/images/video-game-console.png",
  },
];

products.forEach(({ productImage, name, id, price, category }) => {
  toyCards.innerHTML += `<div class="toy-card">
  <img src=${productImage} class="product-image">
  <h2>${name}</h2>
  <p class="toy-price">$${price}</p>
  <p class="product-category">${"Category: " + category}</p>
  <button class="btn add-to-cart-btn" id=${id}>Add to cart</button>
  </div>
    `;
});

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);
    const totalCountPerProduct = {};
    this.items.forEach((toy) => {
      totalCountPerProduct[toy.id] = (totalCountPerProduct[toy.id] || 0) + 1;
    });

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(
      `product-count-for-id${product.id}`
    );

    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
      : (productsContainer.innerHTML += `<div class="product" id="toy${id}">
      <p><span class="product-count" id="product-count-for-id${id}">${name}</span></p>
      <p>${price}</p>
      </div>`);
  }
}

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");
[...addToCartBtns].forEach((btn) =>
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products);
  })
);

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});
