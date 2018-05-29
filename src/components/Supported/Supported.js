import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Supported extends Component {
    constructor(props) {
        super(props)

        this.state = {
            supported: '',
        }
    }

    handleChange = event => {
        this.setState({
            supported: event.target.value
        })
        console.log('supported value', event.target.value)
    }

    sendSupported = () => {
        const action = {
            type: 'ADD_SUPPORT',
            payload: this.state,
        };
        this.props.dispatch(action);
    };

    render() {
        return (
                <div className="App">
                    <form>
                        <h2>How well are you being supported?</h2>
                        <input type="number" onChange={this.handleChange} value={this.state.supported} />
                        <Link to="/4" onClick={this.sendSupported}><button>Next</button></Link>
                    </form>
                    
                </div>
                );
            }
        }
        
export default connect()(Supported);