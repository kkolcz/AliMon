import { configureStore } from '@reduxjs/toolkit'
import shipmentReducer from './shipmentSlice.js'

export default configureStore({
	reducer: {
		shipment: shipmentReducer,
	},
})
