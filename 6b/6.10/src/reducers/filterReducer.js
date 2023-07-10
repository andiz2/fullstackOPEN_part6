import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		setFilter(state, action){
		console.log('state f ', state)
		console.log('action f ', action)
			return state !== undefined ? action.payload : state
		}
		/*setFilter(state, action){
			return action.payload
		},
		noFilter(state, action){
			return state
		}*/
	}
})

/*
const filterReducer = (state ='', action) => {
	console.log('ACTION: ', action)
	switch(action.type){
		case 'SET_FILTER':
			return action.payload
		default:
			return state
	}
}

export const filterChange = filter => {
	return {
		type: 'SET_FILTER',
		payload: filter,
	}
}
*/

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer
//export default filterReducer