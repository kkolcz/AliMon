import React, { useRef } from 'react'

import { Button, Card, TextField } from '@mui/material'

import { useUserAuth } from '../../../context/UserAuthContext'

import useDatabase from '../../../hooks/use-database'

const ShipmentAdd = props => {
	const inputNameRef = useRef()
	const inputNumberRef = useRef()
	const inputDescriptionRef = useRef()

	const { addNewShipment } = useDatabase()
	const { user } = useUserAuth()

	const addButtonHandler = () => {
		const inputName = inputNameRef.current.value
		const inputNumber = inputNumberRef.current.value
		const inputDescription = inputDescriptionRef.current.value
		const date = new Date().toLocaleString()

		if (inputName === '' || inputNumber === '') {
			return
		}

		const newShipment = {
			userUID: user.uid,
			name: inputName,
			number: inputNumber,
			description: inputDescription,
			date: date,
		}

		addNewShipment(newShipment)

		inputNameRef.current.value = ''
		inputNumberRef.current.value = ''
		inputDescriptionRef.current.value = ''
	}

	// useEffect(() => {
	// 	if (props.isEditingShipment) {
	// 		const shipment = props.isEditingShipment
	// 	}
	// }, [props.isEditingShipment])

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
