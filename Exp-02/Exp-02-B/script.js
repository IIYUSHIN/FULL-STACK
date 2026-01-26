const products = [
    { name: "Wireless Headphones", price: 129.99, category: "electronics" },
    { name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
    { name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
    { name: "Denim Jeans", price: 59.99, category: "clothing" }
];

const productList = document.getElementById("productList");
const categorySelect = document.getElementById("category");

function displayProducts(filter) {
    productList.innerHTML = "";

    const filteredProducts =
        filter === "all"
            ? products
            : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">$${product.price}</p>
            <span class="tag ${product.category}">
                ${product.category}
            </span>
        `;

        productList.appendChild(card);
    });
}

categorySelect.addEventListener("change", () => {
    displayProducts(categorySelect.value);
});

displayProducts("all");
