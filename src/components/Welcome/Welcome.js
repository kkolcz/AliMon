import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
	return (
		<Fragment>
			<h1>Witaj na stronie AliMon - Monitoring Paczek</h1>
			<div>
				<Link to='/home'>Home</Link>
				<Link to='/account'>Account</Link>
			</div>
		</Fragment>
	)
}

export default Welcome
