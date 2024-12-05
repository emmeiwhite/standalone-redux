/** --- GOAL: To make an API call via middleware --- */
const redux = require('redux')
const createStore = redux.createStore
const axios = require('axios')

const applyMiddleware = redux.applyMiddleware
const { thunk } = require('redux-thunk')

// Step-1: Let's define our State

let initialState = {
  loading: false,
  products: [],
  error: false
}

// Step-2: Let's define our action constants

const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'

// Step-3: Let's create action-creators
function fetchRequest() {
  return {
    type: FETCH_REQUEST
  }
}

function fetchSuccess(products) {
  return {
    type: FETCH_SUCCESS,
    payload: products
  }
}

function fetchError() {
  return {
    type: FETCH_ERROR
  }
}

// 4. Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

// Thunk Action Creator: Returns a non-pure function which can dispatch actions and perform side-effects

const url = 'https://fakestoreapi.com/products'

function fetchProducts() {
  return async function (dispatch) {
    dispatch(fetchRequest())
    try {
      const products = await axios.get(url)

      const titles = products.data.map(product => product.title)

      // So here we pass the products from there to the reducer
      dispatch(fetchSuccess(titles))
    } catch (error) {
      dispatch(fetchError())
    }
  }
}
// Creating Store
const store = createStore(reducer, applyMiddleware(thunk))

// Let's subscribe to the store
store.subscribe(() => {
  console.log('STATE:', store.getState())
})

// Let's dispatch actions with thunk middleware action creator
store.dispatch(fetchProducts())
