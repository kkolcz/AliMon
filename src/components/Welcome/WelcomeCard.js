import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const WelcomeCard = props => {
	return (
		<Card sx={props.sx}>
			<CardContent>
				<Typography variant={`${props.text1.variant}`} color={`text.${props.text1.color}`}>
					{`${props.text1.text}`}
				</Typography>

				<Typography sx={props.text2.sx} variant={`${props.text2.variant}`} color={`text.${props.text2.color}`}>
					{`${props.text2.text}`}
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={props.button.link}>
					<Button size='small'>{`${props.button.text}`}</Button>
				</Link>
			</CardActions>
		</Card>
	)
}

export default WelcomeCard
