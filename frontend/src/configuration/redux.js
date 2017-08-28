import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'

import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware } from 'react-router-redux'

import windowSize, { REDUCER_KEY, createSizeAction, listenResize } from 'redux-windowsize'


// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  router: routerReducer,
  size: windowSize,
})

export const store = createStore(rootReducer, applyMiddleware(middleware))

// Update redux with current size.
store.dispatch(createSizeAction(window))

// Dispatch an action every 50ms when window size changes.
listenResize(store, window, 50)
