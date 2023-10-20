import React from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Footer = () => {
	return (
		<Box bottom='0' position='fixed' width='100%' textAlign='center' backgroundColor='#FAFAFA' zIndex='-1'>
			<Typography variant='h8' component='p'>
				© Copyright by XYZ
			</Typography>
		</Box>
	)
}

export default Footer
