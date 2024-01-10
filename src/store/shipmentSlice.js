import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
	shipments: [],
}

const slice = createSlice({
	name: 'shipment',
	initialState: defaultState,
	reducers: {
		set_shipments_list: (state, action) => {
			state.shipments = action.payload
		},
		add_new_shipment: (state, action) => {
			state.shipments = [...state.shipments, action.payload]
		},
		edit_shipment: (state, action) => {
			state.shipments = state.shipments.filter(element => element.id !== action.payload.id)
			state.shipments = [...state.shipments, action.payload]
		},
		delete_shipment: (state, action) => {
			state.shipments = state.shipments.filter(element => element.id !== action.payload)
		},
	},
})

export const { set_shipments_list, add_new_shipment, edit_shipment, delete_shipment } = slice.actions

export const selectShipments = state => state.shipment.shipments

export default slice.reducer
