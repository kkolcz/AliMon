import React from 'react'

import { useSelector } from 'react-redux'
import { selectShipments } from '../../../store/shipmentSlice'

import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../Firebase/firebase'

import { Box, Button } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const ShipmentList = () => {
	let shipmentList = useSelector(selectShipments)

	const deleteShipmentHandler = async e => {
		console.log(e.target.id)

		await deleteDoc(doc(db, 'shipments', e.target.id)).then(res => {
			console.log(res)
		})
	}

	return (
		<Box>
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
