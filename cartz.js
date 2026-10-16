
const shopName = "Jeez Cartz";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// Display shop name
document.getElementById("shop-name").textContent = shopName;

// Display copyright
document.getElementById("copyright").textContent =
    `© ${currentYear} ${shopName}`;

// Sample product prices
const productPrices = [600, 5100, 250];

const subtotal = productPrices.reduce(
    (total, price) => total + price, 0
);

// Example tax rate: 12%
const taxRate = 0.12;
const tax = subtotal * taxRate;
const totalWithTax = subtotal + tax;

runningTotal = totalWithTax;

// Display calculation
const subtotalElement = document.getElementById("subtotal");
const taxElement = document.getElementById("tax");
const overallElement = document.getElementById("overall");

if (subtotalElement) {
    subtotalElement.textContent =
        `Subtotal: ₱${subtotal.toFixed(2)}`;
}

if (taxElement) {
    taxElement.textContent =
        `Tax: ₱${tax.toFixed(2)}`;
}

if (overallElement) {
    overallElement.textContent =
        `Subtotal With 12% Tax: ₱${totalWithTax.toFixed(2)}`;
}
const productPage = document.body;
const stockCount = Number(productPage.dataset.stock);

let stockMessage;

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else if (stockCount === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Invalid stock count";
}

const stockStatus = document.getElementById("stock-status");

if (stockStatus) {
    stockStatus.textContent = stockMessage;
}

if (stockStatus) {
    if (stockCount === 0) {
        stockStatus.classList.add("unavailable");
        stockStatus.classList.remove("available");

    } else if (stockCount > 0) {
        stockStatus.classList.add("available");
       stockStatus.classList.remove("unavailable");
    }
}

// 4. Free delivery check using && and a ternary
const productPej = document.body;
const orderTotal = Number(productPej.dataset.price);

const isMember = true;

const qualifiesForFreeDelivery =
    orderTotal >= 1000 && isMember;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryResult = document.getElementById("delivery-result");
const deliveryFeeElement = document.getElementById("delivery-fee");
const deliveryTotalElement = document.getElementById("delivery-total");

if (deliveryResult) {
    deliveryResult.textContent =
        `Order total: ₱${orderTotal.toFixed(2)}`;
}

if (deliveryFeeElement) {
    deliveryFeeElement.textContent =
        `Delivery Fee: ₱${deliveryFee.toFixed(2)}`;
}

if (deliveryTotalElement) {
    deliveryTotalElement.textContent =
        `Final Total: ₱${finalTotal.toFixed(2)}`;
}

// 5. Shop open or closed using a boolean and ternary
const isShopOpen = true;
const shopStatus = isShopOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status");

if (shopStatusElement) {
    shopStatusElement.textContent = shopStatus;
}

if (shopStatus) {
    if (isShopOpen === false) {
        shopStatusElement.classList.add("unavailable");
        shopStatusElement.classList.remove("available");
    } else {
       shopStatusElement.classList.add("available");
        shopStatusElement.classList.remove("unavailable");
    }
}
// Console messages
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Running total with tax:", runningTotal);
console.log("Delivery fee:", deliveryFee);
console.log("Delivery Total:", deliveryTotal);
