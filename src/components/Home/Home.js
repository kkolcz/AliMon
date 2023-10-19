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

const Home = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [isEditingShipment, setIsEditingShipment] = useState(false)

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user } = useUserAuth()
	let shipments = []

	useEffect(() => {
		const getShipments = async userid => {
			const q = query(collection(db, 'shipments'), where('userUID', '==', userid))
			getDocs(q)
				.then(res => {
					res.forEach(doc => {
						shipments.push({
							id: doc.id,
							name: doc.data().name,
							number: doc.data().number,
							description: doc.data().description,
							date: doc.data().date,
						})
					})
				})
				.then(() => {
					dispatch(set_shipments_list(shipments))
					setIsLoaded(true)
				})
		}

		if (user) {
			getShipments(user.uid)
		}
		if (!user) {
			navigate('/')
		}

		// console.log(shipments)
	}, [user])

	const editShipmentHandler = shipment => {
		setIsEditingShipment(shipment)
	}

	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				{isLoaded && <ShipmentList onEditShipment={editShipmentHandler} />}
				{isLoaded && <ShipmentAdd isEditingShipment={isEditingShipment} />}
				{!isLoaded && <CircularProgress />}
			</Box>
		</Fragment>
	)
}

export default Home
