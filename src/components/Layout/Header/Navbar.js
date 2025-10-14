import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'

import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import LogoutIcon from '@mui/icons-material/Logout'

import { useUserAuth } from '../../../context/UserAuthContext'
import { useThemeMode } from '../../../context/ThemeContext'
import { APP_NAME, APP_DESCRIPTION } from '../../../constants'

const Navbar = () => {
	const { logOut, isLogin } = useUserAuth()
	const { mode, toggleTheme } = useThemeMode()
	const navigate = useNavigate()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	const logoutHandler = () => {
		logOut()
		navigate('/')
	}

	const handleHomeClick = () => {
		if (isLogin) {
			navigate('/home')
		} else {
			navigate('/')
		}
	}

	return (
		<AppBar position='sticky' elevation={2}>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Box
					onClick={handleHomeClick}
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: { xs: 1, sm: 2 },
						cursor: 'pointer',
						'&:hover': {
							opacity: 0.8,
						},
					}}>
					<LocalPostOfficeIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
					<Box>
						<Typography variant='h6' sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
							{APP_NAME}
						</Typography>
						{!isMobile && (
							<Typography variant='caption' sx={{ display: 'block', lineHeight: 1, opacity: 0.9 }}>
								{APP_DESCRIPTION}
							</Typography>
						)}
					</Box>
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<IconButton
						onClick={toggleTheme}
						color='inherit'
						aria-label={mode === 'dark' ? 'Tryb jasny' : 'Tryb ciemny'}
						title={mode === 'dark' ? 'Przełącz na tryb jasny' : 'Przełącz na tryb ciemny'}>
						{mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>

					{isLogin && (
						<Button
							variant='contained'
							color='secondary'
							onClick={logoutHandler}
							startIcon={!isMobile && <LogoutIcon />}
							size={isMobile ? 'small' : 'medium'}>
							{isMobile ? 'Wyloguj' : 'Wyloguj się'}
						</Button>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
