import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
	isAuth: false,
	user: null,
}

const slice = createSlice({
	name: 'user',
	initialState: defaultState,
	reducers: {
		set_signin: (state, action) => {
			state.user = action.payload
			state.isAuth = true
			console.log('Zalogowano', state.isAuth, state.user)
			console.log(state.user)
		},
		set_signout: (state, action) => {
			console.log('Wylogowano', state.isAuth)
			state.isAuth = false
		},
	},
})

export const { set_signin, set_signout } = slice.actions

export const selectIsAuth = state => state.user.isAuth

export default slice.reducer
