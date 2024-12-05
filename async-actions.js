/** --- GOAL: To make an API call via middleware --- */

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

function fetchSuccess() {
  return {
    type: FETCH_SUCCESS
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
      return {}
    case FETCH_ERROR:
      return {}
    case FETCH_SUCCESS:
      return {}
    default:
      return state
  }
}
