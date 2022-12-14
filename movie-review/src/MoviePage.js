import React from 'react';

export class MoviePage extends React.Component {
	render() {
		let MovieName = "movie name";
		let MovieDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
		let MovieYear = "1990";
		return (
		<div>
			<img type="image" className='movie-thumbnail' src={require('./test_img/home.png')} alt={MovieName}></img>
			<h1>{MovieName}</h1>
			<h3>{MovieYear}</h3>
			<p>{MovieDesc}</p>
		</div>
		);
	}
}
