import { Fragment, useState } from 'react'

import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import Account from './components/Account/Account'

function App() {
	const [isLogin, setIsLogin] = useState(false)

	const loginHandler = () => {
		setIsLogin(true)
	}

	return (
		<Fragment>
			<Layout>
				{isLogin && <Home />}
				{!isLogin && <Account onLogin={loginHandler} />}
				{/* <Container style={{ background: 'gray', height: '100vh' }}></Container> */}
			</Layout>
		</Fragment>
	)
}

export default App
