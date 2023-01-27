// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('input[type=number]').value;
  const subtotal = price * quantity;
  document.getElementsByClassName("subtotal").innerHTML = subtotal;
  product.querySelector('.subtotal').innerHTML =`$${subtotal}`
}

function calculateAll() {

  // ITERATION 2
  
  const getProduct = Array.from(document.getElementsByClassName('product'));
  console.log(getProduct.length);

  for (i=0; i<getProduct.length; i++) {
    updateSubtotal(getProduct[i]);
  }

  // ITERATION 3

  let product1Subtotal = 0;
  for (i=0; i<getProduct.length; i++) {
    product1Subtotal += Number(getProduct[i].querySelector('.subtotal').innerHTML.slice(1));
  }
  console.log(document.querySelector("#total-value").innerHTML = `Total: $${getProduct}`)
  document.querySelector("#total-value").innerHTML = `Total: $${product1Subtotal}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
