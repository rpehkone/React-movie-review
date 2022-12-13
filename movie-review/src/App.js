import React from 'react';
import {MovieQuery} from './MovieQuery.js';
import './App.css';

class App extends React.Component {
   click = (e) => {
      console.log('inside App');
   }
   render(){
      return (
				<div>
          <MovieQuery/>
          <button type='button' onClick={this.click}>Click me</button>
			</div>
			);
   }
}
          
export default App;
