// console.log('Getting started with Redux - standalone!')

const ORDER_PIZZA = 'ORDER_PIZZA'

// action
/* ---

const orderPizza = {
  type: ORDER_PIZZA,
  shop_name: 'Pizza Shop'
}

--- */

// action creator

function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shop_name: 'Pizza Shop'
  }
}
