import React, { Component } from 'react';
import './App.css';

import HomePage from './components/HomePage'
import ToDo from './components/ToDo'

class App extends Component {
  constructor(){
    super()
    this.state={
      loaded: false,
      newToDo: '',
      search: '',
      filtered: false,
      filteredToDos: [],
      toDos: ['walk the dog','feed the dog','eat some food','buy some coffee']
    }
  }

  handleClick = () => {
    this.setState({
      loaded: !this.state.loaded
    })
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      toDos: [...this.state.toDos, this.state.newToDo]
    })
  }

  handleSearch = () => {
    var filteredToDos = this.state.toDos.filter(toDo => {
      return toDo.includes(this.state.search)
    })
    this.setState({
      filteredToDos: filteredToDos,
      filtered: true
    })
  }

  render() {

    var renderToDos = this.state.filtered ? 
      this.state.filteredToDos.map(toDo => <li>{toDo}</li>) :
      this.state.toDos.map(toDo => <li>{toDo}</li>)

    return (
      <div className="App">
        {this.state.loaded ?
        <ToDo handleSearch={this.handleSearch} renderToDos={renderToDos} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClick={this.handleClick} />  
        :
        <HomePage handleClick={this.handleClick}/>
        }
      </div>
    );
  }
}

export default App;
