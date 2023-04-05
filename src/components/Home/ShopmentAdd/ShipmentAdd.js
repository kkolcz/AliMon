import React, { useRef } from 'react'

import { Button, Card, TextField } from '@mui/material'

import { useUserAuth } from '../../../context/UserAuthContext'

import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../../Firebase/firebase'

const ShipmentAdd = () => {
	const inputNameRef = useRef()
	const inputNumberRef = useRef()

	const { user } = useUserAuth()

	const addButtonHandler = () => {
		const inputName = inputNameRef.current.value
		const inputNumber = inputNumberRef.current.value

		if (inputName === '' || inputNumber === '') {
			return
		}
		console.log(user.uid)
		console.log(inputName + ' ' + inputNumber)
		//TODO: utworzenie nowej paczki w bazie danych
		const newShipment = { userUID: user.uid, name: inputName, number: inputNumber }
		addNewShipment(newShipment)
	}

	const addNewShipment = async data => {
		const dbRef = collection(db, 'shipments')
		const dataa = { userUID: data.userUID, name: data.name, number: data.number, date: '11.11.11' }

		await addDoc(dbRef, dataa).then(() => {
			console.log('utworzono')
		})

		// await addDoc(doc(db, 'shipments2'), {
		// 	userUID: data.userUID,
		// 	name: data.name,
		// 	number: data.number,
		// })
		// console.log('utworzono')
	}

	return (
		<Card
			sx={{
				display: 'flex',
				marginTop: '20px',
				// border: '1px dashed grey',
			}}>
			<TextField inputRef={inputNameRef} id='nazwa' label='Nazwa paczki' variant='outlined' sx={{ m: 2 }} />
			<TextField inputRef={inputNumberRef} id='nazwa' label='Numer paczki' variant='outlined' sx={{ m: 2 }} />
			<Button variant='contained' sx={{ m: 2 }} onClick={addButtonHandler}>
				Dodaj
			</Button>
		</Card>
	)
}

export default ShipmentAdd
