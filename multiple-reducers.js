const redux = require('redux')

const createStore = redux.createStore

const ORDER_PIZZA = 'ORDER_PIZZA'
const ORDER_BURGER = 'ORDER_BURGER'

/* ---  let's create individual piece of states --- */
const pizzaState = {
  pizzaBase: 100
}

const burgerState = {
  burgerBun: 200
}

/* ---  Action Creators --- */
function orderPizza() {
  return { type: ORDER_PIZZA }
}

function orderBurger() {
  return { type: ORDER_BURGER }
}

/* --- Let's create individual reducer for each feature --- */
const pizzaReducer = (state = initialState, action) => {
  if (action.type === ORDER_PIZZA) {
    return { ...state, pizzaBase: state.pizzaBase - 1 }
  }
  if (action.type === ORDER_BURGER) {
    return { ...state, burgerBun: state.burgerBun - 1 }
  }
  return state
}

const burgerReducer = (state = initialState, action) => {
  if (action.type === ORDER_PIZZA) {
    return { ...state, pizzaBase: state.pizzaBase - 1 }
  }
  if (action.type === ORDER_BURGER) {
    return { ...state, burgerBun: state.burgerBun - 1 }
  }
  return state
}

const store = createStore(reducer)

console.log('Initial State :', store.getState())

store.subscribe(() => {
  console.log('Current State :', store.getState())
})

store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderBurger())
store.dispatch(orderBurger())
store.dispatch(orderBurger())
