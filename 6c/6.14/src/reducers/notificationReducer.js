import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice ({
	name: 'notification',
	initialState: '',
	reducers: {
	notify(state, action){
		const { notification } = action.payload
		return notification
	},
    clearNotification() {
      return ''
    }
	}
})

export const { notify, clearNotification } = notificationSlice.actions

export const setNotification = (content, second) => {
	return async (dispatch) => {
		dispatch(notify(content))
		setTimeout( () => {
			dispatch(clearNotification())
		}, second * 1000)
	}
}

export default notificationSlice.reducer