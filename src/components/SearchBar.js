import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';
function SearchBar({ onFormSubmit }) {
	const [searchTerm, setsearchTerm] = useState('');

	const onKeyPress = (e) => {
		if (e.key === 'Enter') onFormSubmit(searchTerm);
	};
	const handleChange = (e) => {
		setsearchTerm(e.target.value);
	};

	return (
		<Paper elevation={6} style={{ padding: '25px' }}>
			<TextField fullWidth label='Search...' onKeyPress={onKeyPress} onChange={handleChange}></TextField>
		</Paper>
	);
}

export default SearchBar;
