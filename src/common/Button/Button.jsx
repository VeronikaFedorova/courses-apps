import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		<>
			<button onClick={props.handleClick} className='button'>
				{props.buttonText}
			</button>
		</>
	);
};

export default Button;
