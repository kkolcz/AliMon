import { Fragment, useState } from 'react'

import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Account from './components/Account/Account'

import { Routes, Route } from 'react-router-dom'

import { UserAuthContextProvider } from './components/context/UserAuthContext'
import Welcome from './components/Welcome/Welcome'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
	// const [isLogin, setIsLogin] = useState(false)

	const loginHandler = () => {
		// setIsLogin(true)
	}

	const logOutHandler = () => {}

	return (
		<Fragment>
			<UserAuthContextProvider>
				<Layout logOut={logOutHandler}>
					<Routes>
						<Route path='/' element={<Welcome />} />
						<Route path='/home' element={<Home />} />
						<Route path='/account' element={<Account onLogin={loginHandler} />} />
						{/* {isLogin && }
					{!isLogin && } */}
					</Routes>
					{/* <Container style={{ background: 'gray', height: '100vh' }}></Container> */}
				</Layout>
			</UserAuthContextProvider>
		</Fragment>
	)
}

export default App
