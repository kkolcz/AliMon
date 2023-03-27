import React from 'react'

import { Button, Paper, TextField } from '@mui/material'

const Register = () => {
	const buttonRegisterHandler = () => {}
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
					<TextField id='login' label='Login' variant='outlined' sx={{ m: 2 }} />
					<TextField id='email' label='Email' variant='outlined' sx={{ m: 2 }} />
					<TextField id='password' label='Password' variant='outlined' sx={{ m: 2 }} />
					<TextField id='reassword' label='Re-Password' variant='outlined' sx={{ m: 2 }} />
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
