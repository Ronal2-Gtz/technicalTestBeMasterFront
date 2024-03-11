import { createSlice } from '@reduxjs/toolkit'

type UserAuth = {
	status: 'checking' | 'not-authenticated' | 'authenticated'
	id?: string
	user?: string
	errorMessage?: string
}

const initialState: UserAuth = {
	status: 'not-authenticated',
	id: undefined,
	user: undefined,
	errorMessage: undefined,
}

const init = (): UserAuth => {
	const data = localStorage.getItem('user')

	if (data) {
		const user = JSON.parse(data)
		return user
	}

	return initialState
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: init(),
	reducers: {
		login: (state, { payload }) => {
			state.status = 'authenticated'
			state.id = payload.id
			state.user = payload.user
			state.errorMessage = undefined
		},
		logout: (state, { payload }) => {
			state.status = 'not-authenticated'
			state.id = undefined
			state.user = undefined
			state.errorMessage = payload
		},
		checkingCredentials: (state) => {
			state.status = 'checking'
		},
	},
})

export const { login, logout, checkingCredentials } = authSlice.actions
export default authSlice.reducer