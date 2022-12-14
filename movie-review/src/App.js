import React from 'react';
import {MovieQuery} from './MovieQuery.js';
import {MoviePage} from './MoviePage.js';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pageIndex = 0;
		this.pageNames = ["Activity", "Profile", "Movies", "Search"];
		this.pageSelector = this.pageNames.map((value, get_index) => (
			<button type='button' key={value} onClick={() => this.click(get_index)}>{value}</button>
		));
	}
	click = (e) => {
		this.pageIndex = e;
		this.forceUpdate();
	}
	render() {
		const subPages = [<MovieQuery />, <MoviePage/>];
		let currentPage = subPages[this.pageIndex];
		return (
			<div>
				{this.pageSelector}
				{currentPage}
			</div>
		);
	}
}

export default App;
