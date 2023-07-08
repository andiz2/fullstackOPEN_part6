import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { createAnecdote} from './reducers/anecdoteReducer'

import filterReducer from './reducers/filterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
})

const store = createStore(reducer)
store.subscribe(() => console.log('store', store.getState()))
//store.dispatch(filterReducer('IMPORTANT'))
//store.dispatch(createAnecdote('combineReducers forms one reducer from many simple reducers'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)