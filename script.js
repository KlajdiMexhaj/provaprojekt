let cartItems = [];
let total = 0;

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    total += price;
    
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartList.appendChild(li);
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Totali: $${total}`;
}


