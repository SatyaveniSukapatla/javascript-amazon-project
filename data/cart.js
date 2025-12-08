export let cart;

loadCartFromLocalStorage();

export function loadCartFromLocalStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionsId: 1
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionsId: 2
      }
    ];
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartQuantityDisplay();
}

function updateCartQuantityDisplay() {
  let cartQuantityElement = document.querySelector('.js-cart-quantity');
  if (cartQuantityElement) {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    cartQuantityElement.innerHTML = totalQuantity;
    localStorage.setItem('cartQuantity', totalQuantity);
  }
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
      deliveryOptionsId: deliveryOptions[0].id
    });
  }
  const addedMessage = document.querySelector(`.js-added-to-cart[data-product-id="${productId}"]`);
  addedMessage.classList.add('added-to-cart-visible');
  setTimeout(() => {
    if (addedMessageTimeoutId) {
      clearTimeout(addedMessageTimeoutId);
    }
    const timeoutId = setTimeout(() => {
      addedMessage.classList.remove('added-to-cart-visible');
    }, 2000);
    addedMessageTimeoutId = timeoutId;
  });

  saveCartToLocalStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveCartToLocalStorage();
}

export function updateDeliveryOption(productId, deliveryOptionsId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionsId = Number(deliveryOptionsId);
  saveCartToLocalStorage();
}