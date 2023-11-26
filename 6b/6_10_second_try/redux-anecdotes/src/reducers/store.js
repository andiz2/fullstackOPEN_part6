import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, { createAnec } from './anecdoteReducer'
import filterReducer, {filterChange} from './filterReducer'


export const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer
    }
  })

export default store