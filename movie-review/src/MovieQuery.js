import React from 'react'
import {MovieThumbnail} from './MovieThumbnail.js';

export class MovieQuery extends React.Component {
	movies = ["harry potter", "home alone", "blade runner", "coco", "spider-man"];
	movie_container = this.movies.map((value, index) => {
		return <MovieThumbnail name={value} />
	});
	render() {
		return (
			<div className='movie-thumbnail-container'>
				<h1>Hello</h1>
				{this.movie_container}
			</div>
		);
	}
}  
