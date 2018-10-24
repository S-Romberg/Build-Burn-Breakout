import React, { Component } from 'react';

import Picture from './Picture'
import Text from './Text'

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <Picture image={this.props.image} />
        <Text quotes={this.props.quotes} />
      </div>
    );
  }
}

export default Card;