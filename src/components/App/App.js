import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Feels from '../Feels/Feels';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route exact path='/' component={Feels} />
        <Route exact path='/2' component={Understanding} />
        <Route exact path='/3' component={Supported} />
        <Route exact path='/4' component={Comments} />
        <Route exact path='/5' component={Thanks} />
        <Route exact path='/admin' component={Admin} />

      </div>
      </Router>
    );
  }
}

export default App;
