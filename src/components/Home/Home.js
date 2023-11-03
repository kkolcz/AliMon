import React, { Fragment, useEffect, useState } from 'react'

import { Box, CircularProgress } from '@mui/material'

import ShipmentList from './ShipmentList/ShipmentList'
import ShipmentAdd from './ShipmentAdd/ShipmentAdd'

import { useUserAuth } from '../../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'
import useDatabase from '../../hooks/use-database'

const Home = () => {
	const [isEditingShipment, setIsEditingShipment] = useState(false)

	const navigate = useNavigate()
	const { user } = useUserAuth()

	const { isLoading, getShipments } = useDatabase()

	useEffect(() => {
		if (user) {
			getShipments(user.uid)
		}
		if (!user) {
			navigate('/')
		}
		// eslint-disable-next-line
	}, [user, navigate])

	const editShipmentHandler = shipment => {
		setIsEditingShipment(shipment)
	}

	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				{!isLoading && <ShipmentList onEditShipment={editShipmentHandler} />}
				{!isLoading && <ShipmentAdd isEditingShipment={isEditingShipment} />}
				{isLoading && <CircularProgress />}
			</Box>
		</Fragment>
	)
}

export default Home
