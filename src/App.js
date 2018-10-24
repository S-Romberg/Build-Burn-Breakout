import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Card from './components/Card'

class App extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      quotes: []
    }
  }

  componentDidMount(){
    fetch('https://lit-peak-62946.herokuapp.com/insta-images')
      .then(response => response.json())
      .then(response => {
          this.setState({
            images: response.images
          })
      })
    fetch('https://lit-peak-62946.herokuapp.com/insta-quotes')
      .then(response => response.json())
      .then(response => {
          this.setState({
            quotes: response.quotes
          })
      })
  }

  render() {

    var pictures = this.state.images.map(image => <Card quotes={this.state.quotes} image={image.img} />)

    return (
      <div className="App">
        <Header />
        {pictures}
      </div>
    );
  }
}

export default App;
