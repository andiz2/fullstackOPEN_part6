import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    filterChange(state, action) {
      console.log('und state?', action.type)
	//no need to check for SET_FILTER anymore because in 6.10 action is in reducer already
       //return action.type === 'SET_FILTER' ? action.payload : state
	return action.payload
    }
  }
})

export const {filterChange} = filterSlice.actions
export default filterSlice.reducer

/*
const filterReducer = (state = 'ALL', action) => {
    console.log('ACTION FR: ', action)
    switch (action.type) {
      case 'SET_FILTER':
        console.log('STATE FIlter', state)
        //return (action.payload === '' || typeof action.payload === 'undefined') ? state : state.filter(el => el.content.toLowerCase().includes(action.payload.toLowerCase())) 
        return action.payload
      default:
        return state
    }
  }

export const filterChange = filter => {
    return {
        type: "SET_FILTER",
        payload: filter,
    }
}

export default filterReducer

//return (asd === '' || typeof asd === 'undefined') ? state.anecdotes : state.anecdotes.filter(el => el.content.toLowerCase().includes(asd.toLowerCase()))

*/ 