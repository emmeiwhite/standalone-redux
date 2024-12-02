/** Let's think & without listening try to retrieve from the brain what we learned! */

// 1. Store: A single source of truth, a container which contains all our application state

// 2. Actions: An object to tell the reducer what to update in the application state

// 3. Reducers: A pure function which takes state & action and updates the global state

// 4. Dispatcher: A dispatch() function is used to dispatch the actions

/* Pizza shop Analogy:
1) Customer ordered a Pizza(receipt is the action that  goes to the chef)
2) Chef is a reducer which checks what to update in the Kitchen
3) Kitchen and items in the kitchen can be considered as a state ! 
*/

const redux = require('redux')

const createStore = redux.createStore // this is deprecated but fine for learning purpose

// o) Let's create few actions
const ADD_ITEM = 'ADD_ITEM'
// a) let's create our initialState which we'll add to the store
const initialState = {
  pizzaBase: 200
}

// b) let's create the reducer function

const reducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    return { ...state, pizzaBase: state.pizzaBase - 1 }
  }
  return state
}

// c) time to create store

const store = createStore(reducer)

console.log('Initial State :', store.getState())

// d) let's subscribe to the store | register listener via subscribe
store.subscribe(() => {
  console.log('Current State :', store.getState())
})

// let's dispatch action to the reducer for it to update the state
store.dispatch({ type: ADD_ITEM })
store.dispatch({ type: ADD_ITEM })
store.dispatch({ type: ADD_ITEM })
store.dispatch({ type: ADD_ITEM })
