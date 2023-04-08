import { configureStore } from '@reduxjs/toolkit'
import shipmentReducer from './shipmentSlice.js'
import userReducer from './userSlice.js'

export default configureStore({
	reducer: {
		shipment: shipmentReducer,
		user: userReducer,
	},
})
