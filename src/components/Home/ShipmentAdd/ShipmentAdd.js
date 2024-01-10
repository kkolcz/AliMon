import React, { useEffect, useRef, useState } from 'react'

import { Button, Card, TextField } from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

import { useUserAuth } from '../../../context/UserAuthContext'

import useDatabase from '../../../hooks/use-database'

const ShipmentAdd = props => {
	const shipment = props.isEditingShipment
	const inputNameRef = useRef()
	const inputNumberRef = useRef()
	const inputDescriptionRef = useRef()
	const inputDateRef = useRef()

	//INPUTS USE STATE
	const [inputDate, setInputDate] = useState(dayjs())

	const [isEditing, setIsEditing] = useState(false)

	const { addNewShipment, updateShipment } = useDatabase()
	const { user } = useUserAuth()

	const addButtonHandler = () => {
		const date = new Date(inputDate).toLocaleDateString('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit' })
		const inputName = inputNameRef.current.value
		const inputNumber = inputNumberRef.current.value
		const inputDescription = inputDescriptionRef.current.value
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
		cleanInputs()
	}

	const updateButtonHandler = () => {
		const inputName = inputNameRef.current.value
		const inputNumber = inputNumberRef.current.value
		const inputDescription = inputDescriptionRef.current.value
		const date = new Date(inputDate).toLocaleDateString()

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

		updateShipment(shipment.id, newShipment)
		cleanInputs()
	}

	const cancelButtonHandler = () => {
		setIsEditing(false)
		cleanInputs()
	}

	const cleanInputs = () => {
		inputNameRef.current.value = ''
		inputNumberRef.current.value = ''
		inputDescriptionRef.current.value = ''
		setInputDate(dayjs())
	}

	useEffect(() => {
		if (props.isEditingShipment) {
			setIsEditing(true)
			inputNameRef.current.value = shipment.name
			inputNumberRef.current.value = shipment.number
			inputDescriptionRef.current.value = shipment.description
			setInputDate(dayjs(shipment.date, 'DD.MM.YYYY'))
		} else {
			setIsEditing(false)
		}
	}, [props.isEditingShipment, shipment])

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '20px',
			}}>
			<div>
				{/* InputLabelProps={{ shrink: !!shipment.description }} */}
				<TextField
					InputLabelProps={{ shrink: true }}
					inputRef={inputNameRef}
					id='nazwa'
					label='Nazwa'
					variant='outlined'
					sx={{ m: 2, width: 235 }}
				/>
				<TextField
					InputLabelProps={{ shrink: true }}
					inputRef={inputNumberRef}
					id='nazwa'
					label='Numer'
					variant='outlined'
					sx={{ m: 2, width: 235 }}
				/>
			</div>
			<div>
				<TextField
					InputLabelProps={{ shrink: true }}
					inputRef={inputDescriptionRef}
					id='description'
					label='Opis'
					variant='outlined'
					multiline
					minRows={'3'}
					sx={{ m: 2, width: 500 }}
				/>
			</div>

			<div>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						inputRef={inputDateRef}
						onChange={e => setInputDate(e)}
						label='Data nadania'
						value={dayjs(inputDate)}
						format='DD-MM-YYYY'
					/>
				</LocalizationProvider>
			</div>

			{!isEditing && (
				<div>
					<Button variant='contained' sx={{ m: 2 }} onClick={addButtonHandler}>
						Dodaj
					</Button>
				</div>
			)}
			{isEditing && (
				<div>
					<Button variant='contained' sx={{ m: 2 }} onClick={updateButtonHandler}>
						Zapisz
					</Button>
					<Button variant='contained' sx={{ m: 2 }} onClick={cancelButtonHandler}>
						Anuluj
					</Button>
				</div>
			)}
		</Card>
	)
}

export default ShipmentAdd
