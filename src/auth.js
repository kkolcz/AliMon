import React from 'react'

import { userAuth } from './firebase'
// import { Auth } from 'firebase/auth'

const register = (email, password) => {
	userAuth
		.signInWithEmailAndPassword(email, password)
		.catch(error => alert(`Your email or password is incorrect, please check your data, ${error}`))
}

export { register }
