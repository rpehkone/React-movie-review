import React from 'react'

export class MovieThumbnail extends React.Component {
	 OpenMovie = () => {
			var name = this.props.name
			console.log('inside MovieThumbnail ' + name);
			this.props.SetPage(2);
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
		const thumbnailStyle = {
			color: "red",
		}
		var name = this.props.name
		return (
			<div>
				<img type="image" className='movie-thumbnail' src={require('./home.png')} alt={name} onClick={this.OpenMovie}></img>
				<button type='button' onClick={this.MovieSetAsSeen}>e</button>
				<button style={thumbnailStyle} type='button' onClick={this.LikeMovie}>&lt;3</button>
				<button type='button' onClick={this.MovieDropDown}>...</button>
			</div>
		);
	}
}  
