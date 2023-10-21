import React, { useState } from 'react'

import { Button, Box, Card } from '@mui/material'

import Login from './Login/Login'
import Register from './Register/Register'
import { useNavigate } from 'react-router-dom'

const Account = props => {
	const [isRegister, setIsRegister] = useState(false)

	const navigate = useNavigate()

	const buttonRegisterHandler = () => {
		setIsRegister(!isRegister)
		if (!isRegister) {
			navigate('/account/register')
		} else {
			navigate('/account/login')
		}
	}

	return (
		<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
			<Box>
				<Card>
					{!isRegister && <Login onLogin={props.onLogin} />}
					{isRegister && <Register />}
				</Card>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '1rem',
					}}>
					<Button variant='contained' onClick={buttonRegisterHandler} sx={{ m: 2 }}>
						{!isRegister ? 'Zarejestruj nowe konto' : 'Wróć do logowania'}
					</Button>
				</div>
			</Box>
		</Box>
	)
}

export default Account
