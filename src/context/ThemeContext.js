import React, { createContext, useContext, useState, useMemo } from 'react'

const ThemeContext = createContext()

export const useThemeMode = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useThemeMode must be used within ThemeProvider')
	}
	return context
}

export const ThemeModeProvider = ({ children }) => {
	const [mode, setMode] = useState(() => {
		const savedMode = localStorage.getItem('themeMode')
		if (savedMode) {
			return savedMode
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	})

	const toggleTheme = () => {
		setMode(prevMode => {
			const newMode = prevMode === 'light' ? 'dark' : 'light'
			localStorage.setItem('themeMode', newMode)
			return newMode
		})
	}

	const value = useMemo(
		() => ({
			mode,
			toggleTheme,
		}),
		[mode]
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
