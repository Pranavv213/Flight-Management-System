import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './contactSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})