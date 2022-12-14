import React from 'react';
import { MovieQuery } from './MovieQuery';

export class Activity extends React.Component {
	render() {
		let FilmsWatched = 1200;
		let FilmsWatchedThisYear = 100;
		return (
		<div>
			<p>Films {FilmsWatched}</p>
			<p>This Year {FilmsWatchedThisYear}</p>
			<p>recent activity</p>
			<p>Movie 1</p>
			<p>Movie 2</p>
			<p>Movie 3</p>
			{/* as list  maybe DiaryQuery*/}
			<MovieQuery />
		</div>
		);
	}
}

