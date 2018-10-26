import React, { Component } from 'react';

class ToDo extends Component {

    render(){
        return (
        <div className="ToDo">
            <p>To Do List!</p>
            <button onClick={this.props.handleClick} >give me the puppy pic again plz</button>
            <input onChange={this.props.handleChange} name='search' type='text'/>
            <button onClick={this.props.handleSearch} type='submit'>Search</button>
            <form>
                <input name='newToDo' onChange={this.props.handleChange} type='text' />
                <button onClick={this.props.handleSubmit} type='submit'>Submit!</button>
            </form>
            {this.props.renderToDos}
        </div>
        );
    }
}


export default ToDo;
