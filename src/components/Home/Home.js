import React, { Fragment, useEffect, useState } from 'react'

import { Box, CircularProgress } from '@mui/material'

import { query, collection, getDocs, where } from 'firebase/firestore'
import { db } from '../../Firebase/firebase'

import { useDispatch } from 'react-redux'
import { set_shipments_list } from '../../store/shipmentSlice'

import ShipmentList from './ShipmentList/ShipmentList'
import ShipmentAdd from './ShopmentAdd/ShipmentAdd'

import { useUserAuth } from '../../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'
import iseDatabase from '../../hooks/use-database'
import useDatabase from '../../hooks/use-database'

const Home = () => {
	const [isLoaded, setIsLoaded] = useState(true)
	const [isEditingShipment, setIsEditingShipment] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user } = useUserAuth()
	let shipments = []

	const { test: test, isLoading: isLoading, getPackages: getPackages } = useDatabase()

	useEffect(() => {
		if (user) {
			getPackages(user.uid)
		}
		if (!user) {
			navigate('/')
		}
	}, [user])

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
