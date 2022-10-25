import React from 'react';
import './Input.css';

const Input = (props) => {
	return (
		<>
			<input
				type='text'
				id='inputSearch'
				className='input'
				placeholder={props.placeholderText}
				onChange={props.onChange}
			/>
			<label className='input-label' htmlFor='inputSearch'>
				{props.labelText}
			</label>
		</>
	);
};

export default Input;
