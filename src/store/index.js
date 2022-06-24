import { configureStore } from '@reduxjs/toolkit'
import userState from './slices/UserSlice'
import debtState from './slices/DebtSlice'

export const store = configureStore({
  reducer: {
    userState,
    debtState
  }
})
