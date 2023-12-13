import { createSlice } from '@reduxjs/toolkit'

const initialNotificationState = {
  displayed: false,
  message: '',
}

export const NotificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotificationState,
  reducers: {
    displayNotification: (state, action) => {
      state.message = action.payload
      state.displayed = true
    },
    hideNotification: (state) => {
      state.message = ''
      state.displayed = false
    },
  },
})

export const { displayNotification, hideNotification } =
  NotificationSlice.actions

export const setNotification = (message, timeoutSeconds) => {
  return async (dispatch) => {
    dispatch(displayNotification(message))
    setTimeout(() => {
      dispatch(hideNotification())
    }, timeoutSeconds * 1000)
  }
}

export default NotificationSlice.reducer
