// console.log('Getting started with Redux - standalone!')
const redux = require('redux')
const createStore = redux.createStore

const ORDER_PIZZA = 'ORDER_PIZZA'
const ADD_TOPPING = 'ADD_TOPPING'

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

function updateToppings(newTopping) {
  return {
    type: ADD_TOPPING,
    payload: newTopping
  }
}

// initialState
const initialState = {
  pizzaBase: 100,
  toppings: ['cheese', 'mushroom', 'capsicum']
}

// reducer
const reducer = (state = initialState, action) => {
  if (action.type === ORDER_PIZZA) {
    return { ...state, pizzaBase: state.pizzaBase - 1 }
  }

  if (action.type === ADD_TOPPING) {
    return { ...state, toppings: [...state.toppings, action.payload] }
  }

  return state
}

// 1. Let's create our store

const store = createStore(reducer)

// 2. store.getState()
console.log('Initial State :', store.getState())

// 3. Register listener via subscribe(listener)
store.subscribe(() => {
  console.log('Updated State :', store.getState())
})

// 4. Let's dispatch actions
store.dispatch(orderPizza())
store.dispatch(updateToppings('Chillies'))
store.dispatch(orderPizza())
