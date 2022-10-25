import React from 'react';
import './SearchBar.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const SearchBar = () => {
	return (
		<div className='searchbar'>
			<Input labelText='search' placeholderText='Enter course name' />
			<Button buttonText='Search' />
		</div>
	);
};

export default SearchBar;
