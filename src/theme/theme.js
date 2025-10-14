import { createTheme } from '@mui/material/styles'

export const getTheme = mode => {
	return createTheme({
		palette: {
			mode,
			primary: {
				main: '#1976d2',
				light: '#42a5f5',
				dark: '#1565c0',
			},
			secondary: {
				main: '#dc004e',
				light: '#f73378',
				dark: '#9a0036',
			},
			success: {
				main: '#4caf50',
			},
			error: {
				main: '#f44336',
			},
			warning: {
				main: '#ff9800',
			},
			info: {
				main: '#2196f3',
			},
			background: {
				default: mode === 'light' ? '#f5f5f5' : '#121212',
				paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
			},
		},
		typography: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			h1: {
				fontSize: '2.5rem',
				fontWeight: 600,
			},
			h2: {
				fontSize: '2rem',
				fontWeight: 600,
			},
			h3: {
				fontSize: '1.75rem',
				fontWeight: 500,
			},
			h4: {
				fontSize: '1.5rem',
				fontWeight: 500,
			},
			h5: {
				fontSize: '1.25rem',
				fontWeight: 500,
			},
			h6: {
				fontSize: '1rem',
				fontWeight: 500,
			},
		},
		shape: {
			borderRadius: 8,
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						textTransform: 'none',
						fontWeight: 500,
						borderRadius: 8,
						padding: '8px 16px',
					},
					contained: {
						boxShadow: 'none',
						'&:hover': {
							boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
						},
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
						borderRadius: 12,
					},
				},
			},
			MuiTextField: {
				styleOverrides: {
					root: {
						'& .MuiOutlinedInput-root': {
							borderRadius: 8,
						},
					},
				},
			},
			MuiTableCell: {
				styleOverrides: {
					root: {
						padding: '12px 16px',
					},
					head: {
						fontWeight: 600,
					},
				},
			},
		},
	})
}
