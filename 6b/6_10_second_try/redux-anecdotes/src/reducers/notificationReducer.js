import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        notificationShow(state, action) {
            return action.payload
        },
        notificationHide(state, action) {
            return null
        }
    }
})

export const  { notificationShow, notificationHide } = notificationSlice.actions
export default notificationSlice.reducer