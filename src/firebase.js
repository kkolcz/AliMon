// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
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

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
