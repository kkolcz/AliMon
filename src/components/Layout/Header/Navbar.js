import React from 'react'

import { AppBar, Button, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'

import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'

import { useUserAuth } from '../../context/UserAuthContext'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

const Navbar = props => {
	const { logOut } = useUserAuth()

	const logoutHandler = () => {
		logOut()
	}
	return (
		<AppBar position='static'>
			<StyledToolbar>
				<Box display='flex' alignItems='center' gap={2}>
					<LocalPostOfficeIcon />
					<Typography variant='h6'>AliMon - Monitoring Paczek</Typography>
				</Box>
				<Box>
					<Button variant='contained' color='secondary' onClick={logoutHandler}>
						Wyloguj
					</Button>
				</Box>
			</StyledToolbar>
		</AppBar>
	)
}

export default Navbar
