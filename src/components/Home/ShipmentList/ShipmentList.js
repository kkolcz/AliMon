import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { selectShipments } from '../../../store/shipmentSlice'

import { Box, Button } from '@mui/material'

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

import { DataGrid } from '@mui/x-data-grid'

import useDatabase from '../../../hooks/use-database'

import './ShipmentList.css'

const ShipmentList = props => {
	let shipmentList = useSelector(selectShipments)
	const { deleteShipment } = useDatabase()

	// <TableCell>Nazwa przesyłki</TableCell>
	// <TableCell align='center'>Numer przesyłki</TableCell>
	// <TableCell align='center'>Data nadania</TableCell>
	// <TableCell align='center'>Opis</TableCell>
	// <TableCell align='right'>Zarządzaj</TableCell>

	// DATAGRID
	const columns = [
		{
			field: 'name',
			headerName: 'Nazwa przesyłki',
			width: 200,
			editable: true,
		},
		{
			field: 'date',
			headerName: 'Data wysłania',
			width: 125,
			editable: true,
		},
		{
			field: 'number',
			headerName: 'Numer przesyłki',
			sortable: false,
			width: 250,
			editable: true,
		},
		{
			field: 'description',
			headerName: 'Opis',
			sortable: false,
			width: 400,
			editable: true,
		},
		{
			field: 'action',
			headerName: 'Zarządzaj',
			sortable: false,
			width: 300,
			renderCell: params => {
				const deleteShipmentHandler = e => {
					e.stopPropagation()
					deleteShipment(params.row.id)
				}

				const trackingShipmentHandler = e => {
					e.stopPropagation()
					const url = `https://alipaczka.pl/?track=${params.row.number}`
					window.open(url, '_blank', 'noopener,noreferrer')
				}

				const editShipmentHandler = e => {
					e.stopPropagation()
					props.onEditShipment(params.row)
				}

				const onClick = e => {
					e.stopPropagation()
					console.log(params.row.id)
				}
				return (
					<span>
						<Button onClick={trackingShipmentHandler}>Track</Button>
						<Button onClick={editShipmentHandler}>Edit</Button>
						<Button onClick={deleteShipmentHandler}>Delete</Button>
					</span>
				)
			},
			// valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
		},
	]

	// const rows = [
	// 	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
	// 	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
	// 	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
	// 	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
	// 	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	// 	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	// 	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	// 	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	// 	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
	// ]

	// useEffect(() => {
	// 	console.log(shipmentList)
	// }, [])

	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={shipmentList}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				// checkboxSelection
				disableRowSelectionOnClick
			/>
			{!shipmentList.length > 0 && <h2>Dodaj swoją pierwszą przesyłkę</h2>}
			{/* {shipmentList.length > 0 && (
				<TableContainer component={Paper}>
					<p className='test'>test</p>
					<Table sx={{ minWidth: 500 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Nazwa przesyłki</TableCell>
								<TableCell align='center'>Numer przesyłki</TableCell>
								<TableCell align='center'>Data nadania</TableCell>
								<TableCell align='center'>Opis</TableCell>
								<TableCell align='right'>Zarządzaj</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{shipmentList.map(row => (
								<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: '100px' }}>
									<TableCell width='25%' component='th' scope='row'>
										{row.name}
									</TableCell>
									<TableCell align='center'>{row.number}</TableCell>
									<TableCell align='center'>{row.date}</TableCell>
									<TableCell align='center'>{row.description}</TableCell>
									<TableCell
										align='right'
										style={{
											display: 'flex',
											// flexDirection: 'column',

											'@media screen and (max-idth: 1000px)': {
												backgroundColor: 'red',
												flexDirection: 'column',
											},
										}}>
										<Button
											className='buttons'
											variant='contained'
											id={row.id}
											onClick={deleteShipmentHandler(row.id)}
											sx={{ marginLeft: '10px' }}>
											<DeleteIcon />
										</Button>
										<Button
											variant='contained'
											id={row.number}
											onClick={trackingShipmentHandler(row.number)}
											sx={{ marginLeft: '10px' }}>
											<TravelExploreIcon />
										</Button>
										<Button variant='contained' id={row.id} onClick={editShipmentHandler(row)}>
											<EditIcon />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)} */}
		</Box>
	)
}

export default ShipmentList
