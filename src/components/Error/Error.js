import React from 'react'

const Error = props => {
	return (
		<h1>
			{props.code} - {props.title}
		</h1>
	)
}

export default Error
