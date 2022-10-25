import React from 'react';
import './Header.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = (props) => {
	return (
		<>
			<div className='header'>
				<Logo></Logo>
				<div className='side-content'>
					<h2>Veronika</h2>
					<Button buttonText='Logout'></Button>
				</div>
			</div>
		</>
	);
};

export default Header;
