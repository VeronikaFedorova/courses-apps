import React from 'react';
import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';

const CourseCard = (props) => {
	//const mockedAuthorsList = props.mockedAuthorsList;
	const card = props.mockedCoursesList.map((course) => (
		<div key={course.id} className='card'>
			<div className='card-main'>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>
			<div className='card-side'>
				<span className='card-side__title'>Authors: </span>
				{props.mockedAuthorsList.map((mockedAuthor) => (
					<span key={course.authors.map((author) => author)}>
						{mockedAuthor.name}
					</span>
				))}
				<br />
				<span className='card-side__title'>Duration: </span>
				<span>{formatCreationDate(course.duration)}</span>
				<br />
				<span className='card-side__title'>Created: </span>
				<span>{course.creationDate.split('/').join('.')}</span>
				<br />
				<Button buttonText='Show course' />
			</div>
		</div>
	));
	return <div className='cards-container'>{card}</div>;
};

export default CourseCard;
