/* 

TODO:
0. Select buttons and product quantities, and total price and store them in variables
1. Add event listenter to the button with type click
2. When event listener is triggered, increase quantity of the product in the cart

*/

const addApples = document.getElementById('apples_add');
const applesQuantity = document.getElementById('apples_quantity');
const applesDecrement = document.getElementById('apples_decrement');
const applesIncrement = document.getElementById('apples_increment');

const addBananas = document.getElementById('bananas_add');
const bananasQuantity = document.getElementById('bananas_quantity');
const totalPrice = document.getElementById('total_price');

addBananas.addEventListener('click', () =>
  incrementProductQuantity(bananasQuantity),
);

addApples.addEventListener('click', () =>
  incrementProductQuantity(applesQuantity, applesDecrement),
);
applesIncrement.addEventListener('click', () =>
  incrementProductQuantity(applesQuantity, applesDecrement),
);
applesDecrement.addEventListener('click', () =>
  decrementProductQuantity(applesQuantity, applesDecrement),
);

function incrementProductQuantity(productQuantitySpan, decrementButton) {
  let currentQuantity = Number(productQuantitySpan.innerText);
  let currentPrice = Number(totalPrice.innerText);

   if (currentQuantity >= 1) {
      decrementButton.disabled = false;
      decrementButton.classList.replace('bg-gray-50','bg-gray-200');
    }
  currentQuantity++;
  currentPrice += 5;

  productQuantitySpan.innerText = currentQuantity;
  totalPrice.innerText = currentPrice;
}

function decrementProductQuantity(productQuantitySpan, decrementButton) {
  let currentQuantity = Number(productQuantitySpan.innerText);
  let currentPrice = Number(totalPrice.innerText);

  if (currentQuantity === 1) {
    return;
  } else {
    currentQuantity--;
    if (currentQuantity <= 1) {
      decrementButton.disabled = true;
      decrementButton.classList.replace('bg-gray-200', 'bg-gray-50');
    }
    currentPrice -= 5;
  }

  productQuantitySpan.innerText = currentQuantity;
  totalPrice.innerText = currentPrice;
}
