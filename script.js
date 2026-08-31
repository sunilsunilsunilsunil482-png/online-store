/* =========================
PRODUCT DATABASE
========================= */

const products = [

{
    id: 1,
    name: "Premium Watch",
    category: "Accessories",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
},

{
    id: 2,
    name: "Classic Sneakers",
    category: "Fashion",
    price: 1999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
},

{
    id: 3,
    name: "Leather Bag",
    category: "Fashion",
    price: 2999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
},

{
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 3499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
}

];

/* =========================
CART
========================= */

let cart = [];

/* =========================
SHOW PRODUCTS
========================= */

function displayProducts(list = products) {

const container =
    document.getElementById("products");

container.innerHTML = "";


list.forEach(product => {

    container.innerHTML += `

        <div class="product">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="product-info">

                <small>${product.category}</small>

                <h3>${product.name}</h3>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>

        </div>

    `;

});

}

/* =========================
ADD TO CART
========================= */

function addToCart(id) {

const product =
    products.find(p => p.id === id);

cart.push(product);

updateCart();

alert(product.name + " added to cart 🛒");

}

/* =========================
UPDATE CART
========================= */

function updateCart() {

document.getElementById("cartCount")
    .innerText = cart.length;


const container =
    document.getElementById("cartItems");

container.innerHTML = "";


let total = 0;


cart.forEach((product,index) => {

    total += product.price;


    container.innerHTML += `

        <div class="cart-item">

            <img src="${product.image}">

            <div>

                <h4>${product.name}</h4>

                <strong>
                    ₹${product.price.toLocaleString("en-IN")}
                </strong>

                <br>

                <button
                    class="remove"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        </div>

    `;

});


document.getElementById("cartTotal")
    .innerText =
    total.toLocaleString("en-IN");

}

/* =========================
REMOVE
========================= */

function removeFromCart(index) {

cart.splice(index,1);

updateCart();

}

/* =========================
OPEN CART
========================= */

function openCart() {

document.getElementById("cartOverlay")
    .style.display = "flex";

}

/* =========================
CLOSE CART
========================= */

function closeCart() {

document.getElementById("cartOverlay")
    .style.display = "none";

}

/* =========================
SEARCH
========================= */

function searchProducts() {

const query =
    document.getElementById("search")
    .value
    .toLowerCase();


const filtered =
    products.filter(product =>
        product.name.toLowerCase()
            .includes(query)
    );


displayProducts(filtered);

}

/* =========================
CHECKOUT
========================= */

function checkout() {

if (cart.length === 0) {

    alert("Your cart is empty!");

    return;

}


alert(
    "Checkout system Part 2 में आएगा 🚀"
);

}

/* =========================
START APP
========================= */

displayProducts();
