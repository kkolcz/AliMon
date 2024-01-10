// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAvJ-CZ6Hnzjn3jf3RtEpBYVz2IqewuVQU',
	authDomain: 'project-alimon-v2.firebaseapp.com',
	projectId: 'project-alimon-v2',
	storageBucket: 'project-alimon-v2.appspot.com',
	messagingSenderId: '900169238929',
	appId: '1:900169238929:web:31a4fae3da665ae0b77230',
}

firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)

// Initialize Firebase
export const auth = firebase.auth()
export const db = getFirestore(app)
