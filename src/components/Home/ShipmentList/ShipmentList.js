import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { selectShipments } from '../../../store/shipmentSlice'

import { doc, deleteDoc, collection } from 'firebase/firestore'
import { db } from '../../../Firebase/firebase'

import { Box, Button } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

// const createData = (id, name, number, date) => {
// 	return { id, name, number, date }
// }

// const rows = [
// 	createData(1, 'Obiekt 1', 'AAAAAAAhhAA', '22.11.21'),
// 	createData(2, 'Obiekt 2', 'AAAADFAhhAA', '22.11.21'),
// 	createData(3, 'Obiekt 3', 'AAADFAAhhAA', '22.11.21'),
// 	createData(4, 'Obiekt 4', 'HFAAAAAhhAA', '22.11.21'),
// ]

const ShipmentList = () => {
	let shipmentList = useSelector(selectShipments)

	const deleteShipmentHandler = async e => {
		console.log(e.target.id)

		await deleteDoc(doc(db, 'shipments', e.target.id)).then(res => {
			console.log(res)
		})
	}

	// shipmentList.map(row => {
	// 	console.log(row.id)
	// })

	// const [shipmentList, setShipmentList] = useState([
	// 	{ id: 1, name: 'pack1', number: 'AAAAAAAhhAA', date: '22.22.22' },
	// 	{ id: 2, name: 'pack2', number: 'AAAGAAAAjAA', date: '22.22.22' },
	// 	{ id: 3, name: 'pack3', number: 'AAAADFAAAAA', date: '22.22.22' },
	// 	{ id: 4, name: 'pack4', number: 'AAAADGAAAAA', date: '22.22.22' },
	// 	{ id: 5, name: 'pack5', number: 'AAAAAAGFfAA', date: '22.22.22' },
	// ])

	return (
		<Box>
			{/* <ul>
				{shipmentList.map(shipment => (
					<li>{shipment.name}</li>
				))}
			</ul> */}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Nazwa paczki</TableCell>
							<TableCell align='right'>Numer paczki</TableCell>
							<TableCell align='right'>Data paczki</TableCell>
							<TableCell align='right'>Zarządzaj</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{shipmentList.map(row => (
							<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.number}</TableCell>
								<TableCell align='right'>{row.date}</TableCell>
								<TableCell align='right'>
									<Button variant='contained' id={row.id} onClick={deleteShipmentHandler}>
										X
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}

export default ShipmentList
