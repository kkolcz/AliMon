import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

const Welcome = () => {
	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				<h1>Witaj na stronie AliMon - Monitoring Paczek</h1>
				<div>
					<ul>
						<li>
							<Link to='/home'>Home</Link>
						</li>
						<li>
							<Link to='/account'>Account</Link>
						</li>
					</ul>
				</div>
			</Box>
		</Fragment>
	)
}

export default Welcome
