import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: '',
    }
  }

  handleChange = event => {
    this.setState({
      comment: event.target.value
    })

  }


  submitFeedback = () => {
    const feedback = {
      feeling: this.props.reduxState.reflection.feeling,
      support: this.props.reduxState.reflection.supported,
      understanding: this.props.reduxState.reflection.understanding,
      comments: this.state.comment,
    }
    axios.post('/api/feedback', feedback)
      .then(response => {
        alert('Thanks!');
        this.props.dispatch({type: 'RESET'});
      })
      .catch(error => {
        alert('Error in submitting feedback:', error)
      })
  }

  render() {
    return (
      <div className="App">
        <form>
          <h2>Any Comments you want to leave?</h2>
          <input onChange={this.handleChange} value={this.state.comment} />
          <Link to="/5" onClick={this.submitFeedback}><button>Submit</button></Link>
        </form>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comments);