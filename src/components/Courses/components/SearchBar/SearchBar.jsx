import React from 'react';
import './SearchBar.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { mockedCoursesList } from '../../../../constants';

const SearchBar = () => {
	function performSearch(e) {
		//const courses = mockedCoursesList.map((course) => course.toLowerCase());
		console.log(e);
	}
	return (
		<div className='searchbar'>
			<Input
				labelText='search'
				placeholderText='Enter course name'
				onChange={performSearch()}
			/>
			<Button buttonText='Search' />
		</div>
	);
};

export default SearchBar;
