import React from 'react'

import { Button, Paper, TextField } from '@mui/material'

const Login = props => {
	const buttonLoginHandler = () => {
		props.onLogin(true)
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
					<TextField id='login' label='Login' variant='outlined' sx={{ m: 2 }} />
					<TextField id='login' label='Password' variant='outlined' sx={{ m: 2 }} />
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
