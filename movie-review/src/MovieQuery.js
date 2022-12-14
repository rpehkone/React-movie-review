import React from 'react'
import {MovieThumbnail} from './MovieThumbnail.js';

export class MovieQuery extends React.Component {
	movies = ["harry potter", "home alone", "blade runner", "coco", "spider-man"];
	movie_container = this.movies.map((value, index) => {
		return <MovieThumbnail key={value} name={value} />
	});
	SetDecade(decade) {
		this.decade = decade;
		console.log(this.decade);
	}
	render() {
		return (
		<div>
			<div>
				<h5>Movies</h5>
				<select key={0} name="decade" id="decade-selector" onChange={(decade) => this.SetDecade(decade.value)} >
					<option key={0} decade={2020}>2020s</option>
					<option key={1} decade={2010}>2010s</option>
					<option key={2} decade={2000}>2000s</option>
					<option key={3} decade={1990}>1990s</option>
					<option key={4} decade={1980}>1980s</option>
					<option key={5} decade={1970}>1970s</option>
				</select>
			</div>
			<div className='movie-thumbnail-container'>
				{this.movie_container}
			</div>
		</div>
		);
	}
}  
