import React from 'react';
import {MovieQuery} from './MovieQuery.js';
import './App.css';

class PageButton extends React.Component {
	constructor(props) {
		super(props);
		this.asdf = 0;
	}
	//onclick index
	render() {
		var name = this.props.name;
		return (
			<p>{name}</p>
			// <button type='button' key={value} onClick="this.click('{%index}');">{value}</button>
			);
	}
}

class PageSelector extends React.Component {
	click(i) {
		console.log("page = " + String(i));
	}
	page = 0;
	pageNames = ["Activity", "Profile", "Movies", "Search"];
	pages_container = this.pageNames.map((value, get_index) => {
		return <PageButton key={value} name={value} index={get_index}></PageButton>
	});
	render() {
		return (
			<div>
				{this.pages_container}
			</div>
		);
	}
}

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
				<PageSelector/>
				<MovieQuery/>
				<button type='button' onClick={this.click}>Click me</button>
			</div>
		);
	}
}

export default App;
