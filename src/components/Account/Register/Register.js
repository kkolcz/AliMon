import React, { useRef } from 'react'

import { Button, Paper, TextField } from '@mui/material'

import { useUserAuth } from '../../../context/UserAuthContext'

import { db } from '../../../Firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'

const Register = () => {
	const loginInputRef = useRef()
	const emailInputRef = useRef()
	const passwordInputRef = useRef()
	const repasswordInputRef = useRef()

	const { signUp } = useUserAuth()

	const buttonRegisterHandler = async () => {
		const loginInput = loginInputRef.current.value
		const emailInput = emailInputRef.current.value
		const passwordInput = passwordInputRef.current.value
		const repasswordInput = repasswordInputRef.current.value

		if (passwordInput === repasswordInput) {
			await signUp(emailInput, passwordInput)
				.then(res => {
					const newUser = { login: loginInput, userUID: res.user.uid }
					const dbRef = collection(db, 'users')
					addDoc(dbRef, newUser)
				})
				.catch(err => {
					console.error(err)
					const errorCode = err.code

					switch (errorCode) {
						case 'auth/invalid-email':
							alert('Nieprawidłowy format adresu!')
							break
						case 'auth/weak-password':
							alert('Minimalna wymagana długość hasła to 6 znaków!')
							break
						case 'auth/too-many-requests':
							alert('Zbyt dużo prób logowania!')
							break
						default:
							alert(`Nieznany błąd! ${errorCode}`)
					}
				})
		} else {
			return
		}
	}

	// LOGIN AFTER KEYDOWN ENTER
	// document.addEventListener('keydown', e => {
	// 	if (e.code === 'Enter') {
	// 		buttonRegisterHandler()
	// 	}
	// })

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Rejestracja</h1>
			<div>
				<Paper
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: 600,
						padding: 10,
					}}>
					<TextField inputRef={loginInputRef} id='login' label='Login' variant='outlined' sx={{ m: 2 }} />
					<TextField inputRef={emailInputRef} id='email' label='Email' variant='outlined' sx={{ m: 2 }} />
					<TextField
						inputRef={passwordInputRef}
						id='password'
						type='password'
						label='Password'
						variant='outlined'
						sx={{ m: 2 }}
					/>
					<TextField
						inputRef={repasswordInputRef}
						id='repassword'
						type='password'
						label='Re-Password'
						variant='outlined'
						sx={{ m: 2 }}
					/>
					<Button variant='contained' onClick={buttonRegisterHandler} sx={{ m: 2 }}>
						Zarejestruj
					</Button>
				</Paper>
			</div>
		</div>
	)
}

export default Register
