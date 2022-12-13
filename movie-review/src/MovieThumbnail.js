import React from 'react'

export class MovieThumbnail extends React.Component {
	 click = () => {
			var name = this.props.name
			console.log('inside MovieThumbnail ' + name);
	 }
	 render() {
		var name = this.props.name
		return (
			<div>
				<button type='button' onClick={this.click}>{name}</button>
				{/* <h1> asd </h1> */}
			</div>
		);
	}
}  
