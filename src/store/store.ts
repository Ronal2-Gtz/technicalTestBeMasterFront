import { configureStore } from '@reduxjs/toolkit'
import stepsReducer from './slices/steps/stepsSlice'
import authReducer from './slices/auth/authSlice'

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
    auth: authReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch