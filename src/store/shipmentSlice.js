import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
	shipments: [
		// { id: 1, name: 'pack1', number: 'AAAAAAAhhAA', date: '22.22.22' },
		// { id: 2, name: 'pack2', number: 'AAAGAAAAjAA', date: '22.22.22' },
		// { id: 3, name: 'pack3', number: 'AAAADFAAAAA', date: '22.22.22' },
		// { id: 4, name: 'pack4', number: 'AAAADGAAAAA', date: '22.22.22' },
		// { id: 5, name: 'pack5', number: 'AAAAAAGFfAA', date: '22.22.22' },
	],
}

const slice = createSlice({
	name: 'shipment',
	initialState: defaultState,
	reducers: {
		set_shipments_list: (state, action) => {
			// console.log(action.payload)
			state.shipments = action.payload
		},
		add_new_shipment: (state, action) => {
			state.shipments = [...state.shipments, action.payload]
		},
		edit_shipment: (state, action) => {
			console.log(state.shipments)
			console.log(action.payload)
			state.shipments = state.shipments.filter(element => element.id !== action.payload.id)
			state.shipments = [...state.shipments, action.payload]
		},
		delete_shipment: (state, action) => {
			// console.log(action.payload)
			state.shipments = state.shipments.filter(element => element.id !== action.payload)
		},
	},
})

export const { set_shipments_list, add_new_shipment, edit_shipment, delete_shipment } = slice.actions

export const selectShipments = state => state.shipment.shipments

export default slice.reducer
