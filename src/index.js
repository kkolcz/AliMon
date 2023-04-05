import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store'

import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

const theme = createTheme({
	overrides: {
		MuiBaseline: {
			'@global': {
				body: {
					backgroundColor: 'red',
					color: 'green',
				},
			},
		},
	},
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>
	// </React.StrictMode>
)
