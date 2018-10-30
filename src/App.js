import React, { Component } from 'react';
import './App.css';

import CharacterCard from './components/CharacterCard'

class App extends Component {
  constructor(){
    super()
    this.state={
      data: []
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

  render() {
    return (
      <div className="App">
        <CharacterCard data={this.state.data} />
      </div>
    );
  }
}

export default App;
