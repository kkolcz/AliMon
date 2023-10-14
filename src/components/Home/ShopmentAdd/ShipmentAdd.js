import React, { useRef } from 'react'

import { Box, Button, Card, TextField } from '@mui/material'

import { useUserAuth } from '../../../context/UserAuthContext'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../Firebase/firebase'
import { useDispatch } from 'react-redux'
import { add_new_shipment } from '../../../store/shipmentSlice'

const ShipmentAdd = () => {
	const inputNameRef = useRef()
	const inputNumberRef = useRef()
	const inputDescriptionRef = useRef()
	const dispatch = useDispatch()

	const { user } = useUserAuth()

	const addButtonHandler = () => {
		const inputName = inputNameRef.current.value
		const inputNumber = inputNumberRef.current.value
		const inputDescription = inputDescriptionRef.current.value

		if (inputName === '' || inputNumber === '') {
			return
		}
		console.log(user.uid)
		console.log(inputName + ' ' + inputNumber)
		// TODO: utworzenie nowej paczki w bazie danych
		const newShipment = { userUID: user.uid, name: inputName, number: inputNumber, description: inputDescription }
		addNewShipment(newShipment)
	}

	const addNewShipment = async data => {
		const dbRef = collection(db, 'shipments')
		const newData = { userUID: data.userUID, name: data.name, number: data.number, date: '11.11.11' }

		await addDoc(dbRef, newData).then(res => {
			console.log(res.id)
			console.log('utworzono')
			dispatch(
				add_new_shipment({
					id: res.id,
					userUID: data.userUID,
					name: data.name,
					number: data.number,
					description: data.description,
					date: '11.11.11',
				})
			)
		})
	}

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '20px',
			}}>
			<div>
				<TextField
					inputRef={inputNameRef}
					id='nazwa'
					label='Nazwa paczki'
					variant='outlined'
					sx={{ m: 2, width: 235 }}
				/>
				<TextField
					inputRef={inputNumberRef}
					id='nazwa'
					label='Numer paczki'
					variant='outlined'
					sx={{ m: 2, width: 235 }}
				/>
			</div>
			<div>
				<TextField
					inputRef={inputDescriptionRef}
					id='description'
					label='Opis'
					variant='outlined'
					multiline
					minRows={'3'}
					sx={{ m: 2, width: 500 }}
				/>
			</div>
			<Button variant='contained' sx={{ m: 2 }} onClick={addButtonHandler}>
				Dodaj
			</Button>
		</Card>
	)
}

export default ShipmentAdd
