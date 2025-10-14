import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { ThemeModeProvider, useThemeMode } from './context/ThemeContext'
import { NotificationProvider } from './context/NotificationContext'
import { getTheme } from './theme/theme'

const ThemedApp = () => {
	const { mode } = useThemeMode()
	const theme = getTheme(mode)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Provider store={store}>
				<NotificationProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</NotificationProvider>
			</Provider>
		</ThemeProvider>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeModeProvider>
			<ThemedApp />
		</ThemeModeProvider>
	</React.StrictMode>
)
