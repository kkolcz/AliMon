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
		},
		set_signout: (state, action) => {
			state.isAuth = false
		},
	},
})

export default slice.reducer
