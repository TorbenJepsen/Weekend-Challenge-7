import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Thanks extends Component {

  
  render() {
    return (
      <div className="App">
        <h3>Thanks for your feedback!</h3>
        <Link to="/"><button>Leave New Feedback</button></Link>
      </div>
    );
  }
}

export default Thanks;