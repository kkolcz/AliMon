import React, { Fragment } from 'react'
import { Box, Typography } from '@mui/material'
import WelcomeCard from './WelcomeCard'

const Welcome = () => {
	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				<Box sx={{ m: 5, textAlign: 'center', maxWidth: '700px' }}>
					<Typography variant='h3' gutterBottom fontWeight={600} color='primary.main'>
						Witaj w AliMon
					</Typography>
					<Typography variant='h6' color='text.secondary' gutterBottom>
						Śledź swoje przesyłki z Aliexpress w jednym miejscu
					</Typography>
					<Typography variant='body1' color='text.secondary' sx={{ mt: 2 }}>
						Dzięki AliMon możesz zarządzać wszystkimi swoimi paczkami w prosty i wygodny sposób. Dodawaj przesyłki,
						sprawdzaj ich status i nigdy nie zgub żadnej paczki.
					</Typography>
					<Typography variant='body1' color='text.secondary' sx={{ mt: 1 }}>
						Rejestracja jest całkowicie darmowa i zajmuje tylko chwilę.
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
					<WelcomeCard
						sx={{
							width: 300,
							minHeight: 200,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
						text1={{ variant: 'h5', color: 'primary', text: 'Nie masz konta?' }}
						text2={{
							sx: { mt: 2, fontSize: 16 },
							color: 'secondary',
							text: 'Załóż darmowe konto i zacznij śledzić swoje przesyłki już teraz!',
						}}
						button={{ text: 'Zarejestruj się', link: '/account/register' }}
					/>
					<WelcomeCard
						sx={{
							width: 300,
							minHeight: 200,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
						text1={{ variant: 'h5', color: 'primary', text: 'Masz już konto?' }}
						text2={{
							sx: { mt: 2, fontSize: 16 },
							color: 'secondary',
							text: 'Zaloguj się i zarządzaj swoimi przesyłkami',
						}}
						button={{ text: 'Zaloguj się', link: '/account/login' }}
					/>
				</Box>
			</Box>
		</Fragment>
	)
}

export default Welcome
