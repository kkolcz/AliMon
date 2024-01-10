import { Fragment } from 'react'

import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Account from './components/Account/Account'
import Error from './components/Error/Error'

import { Routes, Route } from 'react-router-dom'

import { UserAuthContextProvider } from './context/UserAuthContext'
import Welcome from './components/Welcome/Welcome'

function App() {
	const logOutHandler = () => {}

	return (
		<Fragment>
			<UserAuthContextProvider>
				<Layout logOut={logOutHandler}>
					<Routes>
						<Route path='/' element={<Welcome />} />
						<Route path='/home' element={<Home />} />
						<Route path='/account/:option' element={<Account />} />
						<Route path='*' element={<Error code='404' title='Something go wrong!' />} />
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
