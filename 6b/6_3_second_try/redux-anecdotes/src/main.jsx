import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
//import reducer from './reducers/anecdoteReducer'

import anecdoteReducer, { createAnec } from './reducers/anecdoteReducer'
import filterReducer, {filterChange} from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

const store = createStore(reducer)

console.log('main state', store.getState())
store.subscribe(() => console.log('main sub', store.getState()))
store.dispatch(filterChange('asd'))
store.dispatch(createAnec('combineReducers forms one reducer from many simple reducers'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)