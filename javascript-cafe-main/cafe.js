// -- JAVASCRIPT CAFE! -- //

// PRODUCTS //

let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
  },

  muffin: {
    stock: 5,
    price: 8.5,
  },

  eggs: {
    stock: 1,
    price: 12.5,
  },
}

function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee: ' + products.whiteCoffee.stock

  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' + products.blackCoffee.stock

  document.getElementById('muffin').innerHTML =
    'Muffin: ' + products.muffin.stock

  document.getElementById('eggs').innerHTML = 'Eggs: ' + products.eggs.stock
}

displayProducts()

// -- CUSTOMERS -- //

let customer = {
  order: [],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  // get a random size for the order in a range 1-5
  // make a new arrage of the things theyre ordering
  // assign the new order to the customer object
  // display the customer order

  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let newOrder = []

  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  displayCustomerOrder()
}

generateCustomerOrder()

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// -- TRANSACTIONS -- //

let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash:' + cash
}

displayCash()

function fillOrder() {
  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[ProductName].stock--
      saleTotal += products[productName].price
    } else {
      alert("I'm sorry, we're out of " + productName)
    }
  }

  cash += saleTotal
  customer.order = []

  displayProducts()
  displayCash()
  displayCustomerOrder()
}

document.getElementById('fillOrder').oneclick = fillOrder
// -- UTIL -- //

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
