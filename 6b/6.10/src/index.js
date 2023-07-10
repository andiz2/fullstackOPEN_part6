import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { createAnecdote} from './reducers/anecdoteReducer'
import store from './store'



console.log('store', store.getState())

//store.dispatch(filterReducer('IMPORTANT'))
//store.dispatch(createAnecdote('combineReducers forms one reducer from many simple reducers'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)