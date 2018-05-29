import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Feels extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feeling: '',
    }
  }

  handleChange = event => {
    this.setState({
      feeling: event.target.value
    })
    console.log('feels value', event.target.value)
  }

  sendFeels = () => {
    const action = {
      type: 'ADD_FEELING',
      payload: this.state,
    };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className="App">
        <form>
          <h2>How are you feeling today?</h2>
          <input type="number" onChange={this.handleChange} value={this.state.feeling} />
          <Link to="/2" onClick={this.sendFeels}><button>Next</button></Link>
        </form>
        
      </div>
    );
  }
}

export default connect()(Feels);
