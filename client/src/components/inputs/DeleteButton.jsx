import React from 'react';
import Button from '@mui/material/Button';

/**
 * 
 * A button that would delete the user's profile
 * 
 */
const DeleteButton = ({onClick}) => {
	return <Button variant="contained" color="secondary" onClick={onClick}>
		Delete Your Profile!!!
	</Button>
}

export {DeleteButton};