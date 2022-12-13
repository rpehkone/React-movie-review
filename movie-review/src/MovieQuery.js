import React from 'react'
import {MovieThumbnail} from './MovieThumbnail.js';

export class MovieQuery extends React.Component {
	 render() {
		return (
			<div>
				<h1>Hello</h1>
				<MovieThumbnail name="harry potter"/>
				<MovieThumbnail name="home alone"/>
			</div>
		);
	}
}  

