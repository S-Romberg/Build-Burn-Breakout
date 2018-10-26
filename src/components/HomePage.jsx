import React from 'react';

const HomePage = (props) => {
    return (
      <div onClick={props.handleClick} className="HomePage">
        <h1>Do some stuff</h1>
      </div>
    );
  }


export default HomePage;
