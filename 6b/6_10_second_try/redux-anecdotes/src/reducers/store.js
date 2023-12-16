import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, { createAnec } from './anecdoteReducer'
import filterReducer, {filterChange} from './filterReducer'
import notificationReducer from './notificationReducer'


export const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer
    }
  })

export default store