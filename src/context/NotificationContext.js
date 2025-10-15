import React, { createContext, useContext, useState, useCallback } from 'react'
import { Snackbar, Alert, useTheme } from '@mui/material'

const NotificationContext = createContext()

export const useNotification = () => {
	const context = useContext(NotificationContext)
	if (!context) {
		throw new Error('useNotification must be used within NotificationProvider')
	}
	return context
}

export const NotificationProvider = ({ children }) => {
	const theme = useTheme()
	const [notification, setNotification] = useState({
		open: false,
		message: '',
		severity: 'info', // 'success' | 'error' | 'warning' | 'info'
	})

	const showNotification = useCallback((message, severity = 'info') => {
		setNotification({
			open: true,
			message,
			severity,
		})
	}, [])

	const showSuccess = useCallback(
		message => {
			showNotification(message, 'success')
		},
		[showNotification]
	)

	const showError = useCallback(
		message => {
			showNotification(message, 'error')
		},
		[showNotification]
	)

	const showWarning = useCallback(
		message => {
			showNotification(message, 'warning')
		},
		[showNotification]
	)

	const showInfo = useCallback(
		message => {
			showNotification(message, 'info')
		},
		[showNotification]
	)

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setNotification(prev => ({ ...prev, open: false }))
	}

	return (
		<NotificationContext.Provider
			value={{
				showNotification,
				showSuccess,
				showError,
				showWarning,
				showInfo,
			}}>
			{children}
			<Snackbar
				open={notification.open}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
				<Alert
					onClose={handleClose}
					severity={notification.severity}
					variant={theme.palette.mode === 'dark' ? 'filled' : 'standard'}
					elevation={6}
					sx={{
						width: '100%',
						...(theme.palette.mode === 'dark' && {
							backgroundColor: theme.palette[notification.severity]?.dark || theme.palette.background.paper,
							color: theme.palette.common.white,
						}),
					}}>
					{notification.message}
				</Alert>
			</Snackbar>
		</NotificationContext.Provider>
	)
}
