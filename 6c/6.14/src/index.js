import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { createAnecdote} from './reducers/anecdoteReducer'
import store from './store'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, {setAnecdotes} from './reducers/anecdoteReducer'



console.log('store', store.getState())
anecdoteService.getAll().then(anecdotes =>
  store.dispatch(setAnecdotes(anecdotes))
)

//store.dispatch(filterReducer('IMPORTANT'))
//store.dispatch(createAnecdote('combineReducers forms one reducer from many simple reducers'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)