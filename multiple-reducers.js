const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

// Middleware in action
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const applyMiddleware = redux.applyMiddleware

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
const pizzaReducer = (state = pizzaState, action) => {
  if (action.type === ORDER_PIZZA) {
    return { ...state, pizzaBase: state.pizzaBase - 1 }
  }

  return state
}

const burgerReducer = (state = burgerState, action) => {
  if (action.type === ORDER_PIZZA) {
    return { ...state, burgerBun: state.burgerBun - 1 }
  }

  return state
}

/** --- Creating our ROOT Reducer --- */
const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log('Initial State :', store.getState())

store.subscribe(() => {
  // console.log('Current State :', store.getState())
  /** No need to use our own custom log, since logger takes care of it!
   */
})

store.dispatch(orderPizza())
