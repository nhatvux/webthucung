function changeQuantity(productId, change) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;

    if (currentQuantity < 1) {
        currentQuantity = 1; // Đảm bảo số lượng không âm
    }

    quantityInput.value = currentQuantity;
}

function addToCart(productName, price, quantity) {
    alert(`${productName} đã được thêm vào giỏ hàng với giá ${price} VNĐ và số lượng ${quantity}.`);
}
