import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './slices/loadingSlice'
import loginFormSlice from './slices/loginFormSlice'
import notificationSlice from './slices/notificationSlice'
import regoFormSlice from './slices/regoFormSlice'
import userSlice from './slices/userSlice'

export default configureStore({
  reducer: {
      user: userSlice,
      notification: notificationSlice,
      loading: loadingSlice,
      regoForm: regoFormSlice,
      loginForm: loginFormSlice
  },
})