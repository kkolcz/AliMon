import React from 'react'

import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Footer = () => {
	return (
		<Box bottom='0' position='fixed' width='100%' textAlign='center' backgroundColor='#FAFAFA' zIndex='-1'>
			<Typography variant='h8' component='p'>
				<Link href='https://github.com/kkolcz/'>kkolcz(GitHub)</Link>
			</Typography>
		</Box>
	)
}

export default Footer
