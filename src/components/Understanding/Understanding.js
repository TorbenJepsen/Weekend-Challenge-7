import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Understanding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            understanding: '',
        }
    }

    handleChange = event => {
        this.setState({
            understanding: event.target.value
        })
        console.log('understanding value', event.target.value);
    }

    sendUnderstanding = () => {
        const action = {
            type: 'ADD_UNDERSTANDING',
            payload: this.state,
        };
        this.props.dispatch(action);
    };

    render() {
        return (
                <div className="App">
                    <form>
                        <h2>How well are you understanding the content?</h2>
                        <input onChange={this.handleChange} value={this.state.understanding} />
                        <Link to="/3" onClick={this.sendUnderstanding}><button>Next</button></Link>
                    </form>
                    
                </div>
                );
            }
        }
        
export default connect()(Understanding);
