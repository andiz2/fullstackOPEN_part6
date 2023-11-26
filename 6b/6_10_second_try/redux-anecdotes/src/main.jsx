import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import store from './reducers/store'

import App from './App'
//code <6.10
//import reducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'

//code 6.10 :)
//import anecdoteReducer, { createAnec } from './reducers/anecdoteReducer'
//import filterReducer, {filterChange} from './reducers/filterReducer'

/* THIS WAS USED IN A PREVIOUS EXERCISE (EARLIER THAT 6.10) - code <6.10
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})
*/

/* MOVED STORE TO STORE.JS CODE 6.10 
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})
*/

//const store = createStore(reducer)

console.log('main state', store.getState())
store.subscribe(() => console.log('main sub', store.getState()))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)