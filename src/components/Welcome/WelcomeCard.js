import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const WelcomeCard = props => {
	return (
		<Card sx={props.sx} elevation={3}>
			<CardContent>
				<Typography variant={`${props.text1.variant}`} color={`text.${props.text1.color}`} fontWeight={500}>
					{`${props.text1.text}`}
				</Typography>

				<Typography sx={props.text2.sx} variant='body1' color={`text.${props.text2.color}`}>
					{`${props.text2.text}`}
				</Typography>
			</CardContent>
			<CardActions sx={{ p: 2, pt: 0 }}>
				<Button component={Link} to={props.button.link} variant='contained' color='primary' fullWidth>
					{`${props.button.text}`}
				</Button>
			</CardActions>
		</Card>
	)
}

export default WelcomeCard
