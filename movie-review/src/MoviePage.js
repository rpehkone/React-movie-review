import React from 'react';

export class MoviePage extends React.Component {
	render() {
		let MovieName = "movie name";
		let MovieDesc = "a;lsdkjfs kdjfasdlk fasjdhf alskjdhf lkahsjda sdfkl asdjf;";
		let MovieYear = "1990";
		return (
		<div>
			<img type="image" className='movie-thumbnail' src={require('./home.png')} alt={MovieName}></img>
			<h1>{MovieName}</h1>
			<h3>{MovieYear}</h3>
			<p>{MovieDesc}</p>
		</div>
		);
	}
}
