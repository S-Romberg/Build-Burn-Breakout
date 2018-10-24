import React, { Component } from 'react';


class Text extends Component {
  render() {
      var quote = this.props.quotes.map(quote => {
        let index = Math.floor(Math.random() * this.props.quotes.length)
        return this.props.quotes[index].quote;
      })
    return (
      <div className="Text">
        <p>{quote[0]}</p>
      </div>
    );
  }
}

export default Text;