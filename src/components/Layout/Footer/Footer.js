import React from 'react'

import { Link, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
	const theme = useTheme()
	const currentYear = new Date().getFullYear()

	return (
		<Box
			component='footer'
			sx={{
				width: '100%',
				textAlign: 'center',
				backgroundColor: theme.palette.background.paper,
				borderTop: `1px solid ${theme.palette.divider}`,
				py: 2,
				mt: 'auto',
				boxShadow: theme.palette.mode === 'dark' ? '0 -2px 8px rgba(0,0,0,0.3)' : '0 -2px 8px rgba(0,0,0,0.1)',
			}}>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
				<Typography variant='body2' color='text.secondary'>
					Stworzone przez
				</Typography>
				<Link
					href='https://github.com/kkolcz/'
					target='_blank'
					rel='noopener noreferrer'
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 0.5,
						textDecoration: 'none',
						color: 'primary.main',
						'&:hover': {
							textDecoration: 'underline',
						},
					}}>
					<GitHubIcon sx={{ fontSize: 18 }} />
					<Typography variant='body2' fontWeight={500}>
						kkolcz
					</Typography>
				</Link>
			</Box>
			<Typography variant='caption' color='text.secondary'>
				© {currentYear} AliMon - Śledzenie przesyłek
			</Typography>
		</Box>
	)
}

export default Footer
