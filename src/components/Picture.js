import React, { Component } from 'react';


class Picture extends Component {
  render() {
    return (
      <img className='image' src={this.props.image} />
    );
  }
}

export default Picture;