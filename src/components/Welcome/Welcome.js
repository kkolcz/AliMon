import React, { Fragment } from 'react'
import { Box, Typography } from '@mui/material'
import WelcomeCard from './WelcomeCard'

const Welcome = () => {
	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				<Box sx={{ m: 5 }}>
					<Typography variant='h4'>Witaj na AliMon</Typography>
					<Typography variant='h5'>Umożliwiamy sprawniejsze zarządzanie paczkami.</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<WelcomeCard
						sx={{ m: 2, minWidth: 250, maxWidth: 275, maxHeight: 275 }}
						text1={{ variant: 'h5', color: 'primary', text: 'Nie masz konta?' }}
						text2={{
							sx: { mt: 2, fontSize: 16 },
							color: 'secondary',
							text: 'Możesz je założyć za darmo, system AliMon jest darmowy!',
						}}
						button={{ text: 'Zarejestruj się!', link: '/account/register' }}
					/>
					<WelcomeCard
						sx={{ m: 2, minWidth: 250, maxWidth: 275, maxHeight: 275 }}
						text1={{ variant: 'h5', color: 'primary', text: 'Jesteś już użytkownikiem?' }}
						text2={{
							sx: { mt: 2, fontSize: 16 },
							color: 'secondary',
							text: 'Przejdź do strony logowania',
						}}
						button={{ text: 'Zaloguj!', link: '/account/login' }}
					/>
				</Box>
				{/* <Box>
					<ul>
						<li>
							<Link to='/home'>Home</Link>
						</li>
						<li>
							<Link to='/account'>Account</Link>
						</li>
					</ul>
				</Box> */}
			</Box>
		</Fragment>
	)
}

export default Welcome
