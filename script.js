const products = [
  {
    name: "Shoes",
    price: 1999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    name: "Bag",
    price: 1499,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  }
];

const grid = document.getElementById("product-grid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="buyNow()">Buy Now</button>
  `;

  grid.appendChild(card);
});

function buyNow() {
  window.open("https://checkout.stripe.com/", "_blank");
}