import React from 'react';
import {Activity} from './Activity';
import {MovieQuery} from './MovieQuery.js';
	import {MovieQueryApi} from './MovieQueryApi.js';
import {MoviePage} from './MoviePage.js';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.MovieQueryApi = new MovieQueryApi("https://localhost:3000");
		// this.MovieQueryApi = new MovieQueryApi("https://127.0.0.1:8080");
		this.subPages = [<Activity />, <MovieQuery SetPage={this.SetPage}/>, <MoviePage/>];
		//foreach add SetPage
		this.pageIndex = 0;
		this.loaded = false;
		this.pageNames = ["Activity", "Movies", "Search"];
		this.pageSelector = this.pageNames.map((value, index) => (
			<button type='button' key={value} onClick={() => this.SetPage(index)}>{value}</button>
		));
	}
	afterPageLoad() {
		if (this.loaded === false) {
			this.loaded = true;
			this.MovieQueryApi.query(1990, null, "Action", "Superhero", "Popularity", true, false, false, false, false);
		}
	}
	SetPage = (get_index) => {
		this.pageIndex = get_index;
		this.forceUpdate();
	}
	render() {
		let currentPage = this.subPages[this.pageIndex];
		return (
			<div onLoad={() => this.afterPageLoad()} >
				{this.pageSelector}
				{currentPage}
			</div>
		);
	}
}

export default App;
