import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';

const Courses = () => {
	return (
		<>
			<div className='search-header'>
				<SearchBar />
				<Button buttonText='Add new course' />
			</div>
			<CourseCard
				mockedCoursesList={mockedCoursesList}
				mockedAuthorsList={mockedAuthorsList}
			/>
		</>
	);
};

export default Courses;
