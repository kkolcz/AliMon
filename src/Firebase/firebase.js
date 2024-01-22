import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
}

firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)

// Initialize Firebase
export const auth = firebase.auth()
export const db = getFirestore(app)
