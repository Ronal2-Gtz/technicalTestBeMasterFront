import { createSlice } from '@reduxjs/toolkit'

export type stepsState = { step: 'email' | 'password' }

const initialState: stepsState = { step: 'email' }

export const stepsSlice = createSlice({
    name: 'steps',
    initialState,
    reducers: {
        goToEmail: (state) => {
            state.step = 'email'
        },
        goToPassword: (state) => {
            state.step = 'password'
        },
    },
})

export const { goToEmail, goToPassword } = stepsSlice.actions
export default stepsSlice.reducer