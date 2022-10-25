import React from 'react';
import './Logo.css';
import logo from '../../../../images/logo.png';

const Logo = () => {
	return (
		<>
			<img src={logo} alt='logo' className='logo' />
		</>
	);
};

export default Logo;
