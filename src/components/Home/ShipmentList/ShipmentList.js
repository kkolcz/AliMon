import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectShipments, delete_shipment } from '../../../store/shipmentSlice'

import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../Firebase/firebase'

import { Box, Button, Typography } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const ShipmentList = () => {
	let shipmentList = useSelector(selectShipments)
	const dispatch = useDispatch()

	const deleteShipmentHandler = async e => {
		console.log(e.target.id)

		await deleteDoc(doc(db, 'shipments', e.target.id)).then(res => {
			dispatch(delete_shipment(e.target.id))
			console.log(res)
		})
	}

	const trackingShipmentHandler = e => {
		// window.open('someLink', '_blank')
		const url = `https://alipaczka.pl/?track=${e.target.id}`
		window.open(url, '_blank', 'noopener,noreferrer')
		// if (newWindow) newWindow.opener = null

		console.log(e.target.id)
	}

	const editShipmentHandler = e => {
		console.log(e.target.id)
	}

	return (
		<Box>
			{!shipmentList.length > 0 && <h2>Dodaj swoją pierwszą przesyłkę</h2>}
			{shipmentList.length > 0 && (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 1000 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Nazwa paczki</TableCell>
								<TableCell align='center'>Numer paczki</TableCell>
								<TableCell align='center'>Data paczki</TableCell>
								<TableCell align='center'>Opis</TableCell>
								<TableCell align='right'>Zarządzaj</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{shipmentList.map(row => (
								<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell width='25%' component='th' scope='row'>
										{row.name}
									</TableCell>
									<TableCell width='20%' align='center'>
										{row.number}
									</TableCell>
									<TableCell width='15%' align='center'>
										{row.date}
									</TableCell>
									<TableCell width='30%' align='center'>
										{row.description}
									</TableCell>
									<TableCell width='15%' align='right' style={{ display: 'flex', width: '200px' }}>
										<Button variant='contained' id={row.id} onClick={deleteShipmentHandler} sx={{ marginLeft: '10px' }}>
											<DeleteIcon />
										</Button>
										<Button
											variant='contained'
											id={row.number}
											onClick={trackingShipmentHandler}
											sx={{ marginLeft: '10px' }}>
											<TravelExploreIcon />
										</Button>
										<Button variant='contained' id={row.id} onClick={editShipmentHandler}>
											<EditIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Box>
	)
}

export default ShipmentList
