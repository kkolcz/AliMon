import React, { useRef } from 'react'

import { Button, Card, TextField } from '@mui/material'

const ShipmentAdd = () => {
	const inputNameRef = useRef()
	const inputNumberRef = useRef()

	const addButtonHandler = () => {
		const inputName = inputNameRef.current.value
		const inputNumber = inputNumberRef.current.value
		console.log(inputName + ' ' + inputNumber)
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
