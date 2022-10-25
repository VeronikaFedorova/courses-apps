import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header></Header>
				<Courses />
			</div>
		);
	}
}

export default App;
