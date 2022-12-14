import React from 'react';

export class MoviePage extends React.Component {
	render() {
		let moviename = "sdf";
		return (
		<div>
			<img type="image" className='movie-thumbnail' src={require('./home.png')} alt={moviename}></img>
		</div>
		);
	}
}
