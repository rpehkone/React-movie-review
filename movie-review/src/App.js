import React from 'react';
import {MovieQuery} from './MovieQuery.js';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.asd = 0;
	}
	click = (e) => {
		this.asd += 1
		console.log('inside App' + String(this.asd));
	}
	render() {
		return (
			<div>
				<MovieQuery/>
				<button type='button' onClick={this.click}>Click me</button>
			</div>
		);
	}
}

export default App;
