import React, { useRef } from 'react'

import { Button, Paper, TextField } from '@mui/material'

import { loginUser } from '../../../firebase'

const Login = props => {
	const inputEmailRef = useRef()
	const inputPasswordRef = useRef()
	const buttonLoginHandler = async () => {
		// props.onLogin(true)
		const inputEmail = inputEmailRef.current.value
		const inputPassword = inputPasswordRef.current.value

		const res = await loginUser(inputEmail, inputPassword)
		await console.log(res.user.email)
		await console.log(res.user.uid)
	}

	return (
		<div>
			<div>
				<h1>Login</h1>
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
							width: 400,
							padding: 10,
							border: '1px dashed grey',
						}}> */}
					<TextField inputRef={inputEmailRef} id='email' label='Email' variant='outlined' sx={{ m: 2 }} />
					<TextField inputRef={inputPasswordRef} id='password' label='Password' variant='outlined' sx={{ m: 2 }} />
					<Button variant='contained' onClick={buttonLoginHandler} sx={{ m: 2 }}>
						Zaloguj
					</Button>
					{/* </Box> */}
				</Paper>
			</div>
		</div>
	)
}

export default Login
