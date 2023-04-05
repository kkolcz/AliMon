import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from './context/UserAuthContext'

const ProtectedRoute = ({ children }) => {
	const { user } = useUserAuth()

	if (!user) {
		console.log('Nie zalogowano:')
		console.log(user)
		return <Navigate to='/account' />
	}

	return <>{children}</>
}

export default ProtectedRoute
