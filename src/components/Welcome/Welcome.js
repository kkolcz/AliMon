import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import WelcomeCard from './WelcomeCard'

const Welcome = () => {
	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				<h1>Witaj na stronie AliMon - Monitoring Paczek</h1>
				<Box sx={{ display: 'flex' }}>
					<WelcomeCard
						sx={{ m: 2, minWidth: 250, maxWidth: 275, maxHeight: 275 }}
						text1={{ variant: 'h5', color: 'primary', text: 'Nie masz konta?' }}
						text2={{
							sx: { mt: 2, fontSize: 16 },
							color: 'secondary',
							text: 'Możesz je założyć za darmo, system AliMon jest darmowy!',
						}}
						button={{ text: 'Zarejestruj się!', link: '/account' }}
					/>
					<WelcomeCard
						sx={{ m: 2, minWidth: 250, maxWidth: 275, maxHeight: 275 }}
						text1={{ variant: 'h5', color: 'primary', text: 'Jesteś już urzytkownikiem?' }}
						text2={{
							sx: { mt: 2, fontSize: 16 },
							color: 'secondary',
							text: 'Przejdź do strony logowania',
						}}
						button={{ text: 'Zaloguj!', link: '/account' }}
					/>
				</Box>
				<Box>
					<ul>
						<li>
							<Link to='/home'>Home</Link>
						</li>
						<li>
							<Link to='/account'>Account</Link>
						</li>
					</ul>
				</Box>
			</Box>
		</Fragment>
	)
}

export default Welcome
