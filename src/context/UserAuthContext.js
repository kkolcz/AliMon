import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase'

import { useDispatch } from 'react-redux'
import { set_signout, set_signin } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState('')
	const [isLogin, setIsLogin] = useState(false)
	const navigate = useNavigate()
	// console.log(isLogin)

	const dispatch = useDispatch()

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
	}

	function signUp(email, password) {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	function logOut() {
		// dispatch(set_signout())
		setIsLogin(false)
		return signOut(auth)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log('Auth: ', currentUser)
			setUser(currentUser)
			if (currentUser) {
				// dispatch(set_signin(currentUser.email))
				setIsLogin(true)
				navigate('/home')
			}
		})

		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<userAuthContext.Provider value={{ user, isLogin, logIn, signUp, logOut }}>{children}</userAuthContext.Provider>
	)
}

export function useUserAuth() {
	return useContext(userAuthContext)
}
