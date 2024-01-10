import React, { useRef } from 'react'

import { Button, Paper, TextField } from '@mui/material'

import { useUserAuth } from '../../../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'

const Login = props => {
	const inputEmailRef = useRef()
	const inputPasswordRef = useRef()

	const navigate = useNavigate()

	const { logIn } = useUserAuth()

	const buttonLoginHandler = async () => {
		const inputEmail = inputEmailRef.current.value
		const inputPassword = inputPasswordRef.current.value

		await logIn(inputEmail, inputPassword)
			.then(userCredential => {
				navigate('/home')
			})
			.catch(err => {
				console.error(err)
				const errorCode = err.code

				switch (errorCode) {
					case 'auth/invalid-email':
						alert('Nieprawidłowy adres email!')
						break
					case 'auth/user-not-found':
						alert('Nie znaleziono użytkownika o podanym adresie email!')
						break
					case 'auth/wrong-password':
						alert('Nieprawidłowe hasło!')
						break
					case 'auth/too-many-requests':
						alert('Zbyt dużo prób logowania!')
						break
					default:
						alert(`Nieznany błąd! ${errorCode}`)
				}
			})
	}

	// LOGIN AFTER KEYDOWN ENTER
	// document.addEventListener('keydown', e => {
	// 	if (e.code === 'Enter') {
	// 		buttonLoginHandler()
	// 	}
	// })

	return (
		<div>
			<div>
				<h1 style={{ textAlign: 'center' }}>Logowanie</h1>
				<Paper
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: 600,
						padding: 10,
					}}>
					<TextField inputRef={inputEmailRef} id='email' label='Email' variant='outlined' sx={{ m: 2 }} />
					<TextField
						inputRef={inputPasswordRef}
						id='password'
						type='password'
						label='Password'
						variant='outlined'
						sx={{ m: 2 }}
					/>
					<Button variant='contained' onClick={buttonLoginHandler} sx={{ m: 2 }}>
						Zaloguj
					</Button>
				</Paper>
			</div>
		</div>
	)
}

export default Login
