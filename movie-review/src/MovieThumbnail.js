import React from 'react'

export class MovieThumbnail extends React.Component {
	 OpenMovie = () => {
			var name = this.props.name
			console.log('inside MovieThumbnail ' + name);
	 }
	 MovieSetAsSeen = () => {
			var name = this.props.name
			console.log('inside MovieThumbnail ' + name);
	 }
	 LikeMovie = () => {
			var name = this.props.name
			console.log('inside MovieThumbnail ' + name);
	 }
	 MovieDropDown = () => {
			var name = this.props.name
			console.log('inside MovieThumbnail ' + name);
	 }
	 render() {
		var name = this.props.name
		return (
			<div>
				<button className='movie-thumbnail' type='button' onClick={this.OpenMovie}>{name}</button>
				<button type='button' onClick={this.MovieSetAsSeen}>e</button>
				<button type='button' onClick={this.LikeMovie}>&lt;3</button>
				<button type='button' onClick={this.MovieDropDown}>...</button>
			</div>
		);
	}
}  
