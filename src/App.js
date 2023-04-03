import { Fragment, useState } from 'react'

import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Account from './components/Account/Account'

import { Routes, Route } from 'react-router-dom'

import { UserAuthContextProvider } from './components/context/UserAuthContext'

function App() {
	const [isLogin, setIsLogin] = useState(false)

	const loginHandler = () => {
		setIsLogin(true)
	}

	return (
		<Fragment>
			<Layout>
				<UserAuthContextProvider>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/account' element={<Account onLogin={loginHandler} />} />
						{/* {isLogin && }
					{!isLogin && } */}
					</Routes>
				</UserAuthContextProvider>
				{/* <Container style={{ background: 'gray', height: '100vh' }}></Container> */}
			</Layout>
		</Fragment>
	)
}

export default App
