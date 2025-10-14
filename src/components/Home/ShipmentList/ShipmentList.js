import React from 'react'

import { useSelector } from 'react-redux'
import { selectShipments } from '../../../store/shipmentSlice'

import { Box, Button, Card, CardContent, CardActions, Typography, useMediaQuery, useTheme, Chip } from '@mui/material'

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
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

import useDatabase from '../../../hooks/use-database'
import { TRACKING_URL } from '../../../config/config'
import { formatDate } from '../../../utils/helpers'

const ShipmentList = props => {
	let shipmentList = useSelector(selectShipments)
	const { deleteShipment } = useDatabase()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))

	const deleteShipmentHandler = id => async () => {
		deleteShipment(id)
	}

	const trackingShipmentHandler = number => () => {
		const url = `${TRACKING_URL}${number}`
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	const editShipmentHandler = shipment => () => {
		props.onEditShipment(shipment)
	}

	const MobileView = () => (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			{shipmentList.map(shipment => (
				<Card key={shipment.id} elevation={2}>
					<CardContent>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
							<LocalShippingIcon color='primary' />
							<Typography variant='h6' component='div'>
								{shipment.name}
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
							<Box>
								<Typography variant='caption' color='text.secondary'>
									Numer przesyłki:
								</Typography>
								<Typography variant='body2'>{shipment.number}</Typography>
							</Box>
							<Box>
								<Typography variant='caption' color='text.secondary'>
									Data nadania:
								</Typography>
								<Typography variant='body2'>{formatDate(shipment.date)}</Typography>
							</Box>
							{shipment.description && (
								<Box>
									<Typography variant='caption' color='text.secondary'>
										Opis:
									</Typography>
									<Typography variant='body2'>{shipment.description}</Typography>
								</Box>
							)}
						</Box>
					</CardContent>
					<CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
						<Button
							variant='contained'
							color='primary'
							size='small'
							onClick={editShipmentHandler(shipment)}
							startIcon={<EditIcon />}
							sx={{ flex: 1, mr: 1 }}>
							Edytuj
						</Button>
						<Button
							variant='contained'
							color='info'
							size='small'
							onClick={trackingShipmentHandler(shipment.number)}
							startIcon={<TravelExploreIcon />}
							sx={{ flex: 1, mr: 1 }}>
							Śledź
						</Button>
						<Button
							variant='contained'
							color='secondary'
							size='small'
							onClick={deleteShipmentHandler(shipment.id)}
							startIcon={<DeleteIcon />}
							sx={{ flex: 1 }}>
							Usuń
						</Button>
					</CardActions>
				</Card>
			))}
		</Box>
	)

	const DesktopView = () => (
		<TableContainer component={Paper} elevation={2}>
			<Table sx={{ minWidth: 1000 }} aria-label='shipments table'>
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
						<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell width='25%' component='th' scope='row'>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<LocalShippingIcon color='primary' fontSize='small' />
									<Typography variant='body2'>{row.name}</Typography>
								</Box>
							</TableCell>
							<TableCell width='20%' align='center'>
								<Chip label={row.number} size='small' color='primary' variant='outlined' />
							</TableCell>
							<TableCell width='15%' align='center'>
								{formatDate(row.date)}
							</TableCell>
							<TableCell width='30%' align='center'>
								<Typography variant='body2' color='text.secondary'>
									{row.description || '-'}
								</Typography>
							</TableCell>
							<TableCell width='15%' align='right'>
								<Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
									<Button
										variant='contained'
										color='primary'
										id={row.id}
										onClick={editShipmentHandler(row)}
										sx={{ minWidth: '40px', padding: '8px' }}
										title='Edytuj przesyłkę'>
										<EditIcon />
									</Button>
									<Button
										variant='contained'
										color='info'
										id={row.number}
										onClick={trackingShipmentHandler(row.number)}
										sx={{ minWidth: '40px', padding: '8px' }}
										title='Śledź przesyłkę'>
										<TravelExploreIcon />
									</Button>
									<Button
										variant='contained'
										color='secondary'
										id={row.id}
										onClick={deleteShipmentHandler(row.id)}
										sx={{ minWidth: '40px', padding: '8px' }}
										title='Usuń przesyłkę'>
										<DeleteIcon />
									</Button>
								</Box>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)

	return (
		<Box sx={{ mt: 4 }}>
			<Typography variant='h5' component='h2' sx={{ mb: 3, fontWeight: 600 }}>
				Twoje przesyłki
			</Typography>
			{!shipmentList.length > 0 && (
				<Box
					sx={{
						textAlign: 'center',
						py: 8,
						px: 2,
					}}>
					<LocalShippingIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
					<Typography variant='h5' color='text.secondary' gutterBottom>
						Brak przesyłek
					</Typography>
					<Typography variant='body1' color='text.secondary'>
						Dodaj swoją pierwszą przesyłkę, aby ją śledzić
					</Typography>
				</Box>
			)}
			{shipmentList.length > 0 && (isMobile ? <MobileView /> : <DesktopView />)}
		</Box>
	)
}

export default ShipmentList
