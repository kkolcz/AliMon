import React, { Fragment } from 'react'

import { Box } from '@mui/system'

import Footer from './Footer/Footer'
import Navbar from './Header/Navbar'

const Layout = props => {
	return (
		<Fragment>
			<Box display='flex' flexDirection='column'>
				<Navbar />
				{props.children}
				<Footer />
			</Box>
		</Fragment>
	)
}

export default Layout
