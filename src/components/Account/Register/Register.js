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
					console.log('res')
					console.log(res.user.uid)

					const newUser = { login: loginInput, userUID: res.user.uid }
					const dbRef = collection(db, 'users')
					addDoc(dbRef, newUser)
				})
				.catch(err => {
					console.warn(err)
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

			//TODO: utworzenie użytkownika w bazie danych firebase
		} else {
			return
		}
	}

	return (
		<div>
			<h1>Rejestracja</h1>
			<div>
				<Paper
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: 600,
						padding: 10,
					}}>
					{/* <Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: 300,
						padding: 10,
						border: '1px dashed grey',
					}}> */}
					<TextField inputRef={loginInputRef} id='login' label='Login' variant='outlined' sx={{ m: 2 }} />
					<TextField inputRef={emailInputRef} id='email' label='Email' variant='outlined' sx={{ m: 2 }} />
					<TextField inputRef={passwordInputRef} id='password' label='Password' variant='outlined' sx={{ m: 2 }} />
					<TextField
						inputRef={repasswordInputRef}
						id='repassword'
						label='Re-Password'
						variant='outlined'
						sx={{ m: 2 }}
					/>
					<Button variant='contained' onClick={buttonRegisterHandler} sx={{ m: 2 }}>
						Zarejestruj
					</Button>
					{/* </Box> */}
				</Paper>
			</div>
		</div>
	)
}

export default Register
