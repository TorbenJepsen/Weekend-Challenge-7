import React, { Component } from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem/FeedBackItem';



class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: [],
    };
  }

  componentDidMount() {
    this.fetchAllFeedbackData();

  }

  fetchAllFeedbackData() {
    axios.get('/api/feedback').then((response) => {
      this.setState({
        feedback: response.data
      });
      console.log('GET Admin', this.state.feedback);

    }).catch((error) => {
      console.log('Get Admin error', error);
    });
  }

  deleteFeedback = (feedbackID) => {
    console.log('in delete', feedbackID);
    axios.delete('/api/feedback/' + feedbackID).then((response) => {
        console.log(response);
        this.fetchAllFeedbackData();
    })
        .catch((error) => {
            console.log('error with delete', error);
        });
}



  render() {

    return (

      <div className="App">
        <h3>Feedback Results</h3>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedback.map((feedback) => <FeedbackItem key={feedback.id} feedback={feedback} deleteFeedback={this.deleteFeedback}/>)}
          </tbody>
        </table>
      </div>

    );
  }
}

export default Admin;
