import React, { Fragment } from 'react'

import { Box } from '@mui/system'

import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'

const Layout = props => {
	return (
		<Fragment>
			<Box display='flex' flexDirection='column' minHeight='100vh'>
				<Navbar />
				<Box component='main' sx={{ flexGrow: 1, pb: 4 }}>
					{props.children}
				</Box>
				<Footer />
			</Box>
		</Fragment>
	)
}

export default Layout
