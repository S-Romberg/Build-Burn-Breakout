import React, { Component } from 'react';
import './App.css';

import CharacterCard from './components/CharacterCard'
import MovieCard from './components/MovieCard'

class App extends Component {
  constructor(){
    super()
    this.state={
      data: [],
      movieData: [],
      loaded: false
    }
  }

  componentWillMount(){
    fetch('https://ghibliapi.herokuapp.com/people/')
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        })
      })
  }

  handleClick = (url) => {
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          movieData: response,
          loaded: true
        })
      })
  }

  render() {
    return (
      <div className="App">
      { this.state.loaded ? 
        <div className='movie'>
          <MovieCard movieData={this.state.movieData} /> 
        </div>:
        <CharacterCard handleClick={this.handleClick} data={this.state.data} />
      }
      </div>
    );
  }
}

export default App;
