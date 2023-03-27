import React, { Fragment } from 'react'

import { Box } from '@mui/material'

import ShipmentList from './ShipmentList/ShipmentList'
import ShipmentAdd from './ShopmentAdd/ShipmentAdd'

const Home = () => {
	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				<ShipmentList />
				<ShipmentAdd />
			</Box>
		</Fragment>
	)
}

export default Home
