import React, { Component } from 'react';
import config from 'webpack-config-loader!../config.js';
import { connect } from 'react-redux';
import { setError, clearError } from '../actions/index';
import { logout } from '../actions/login';
import * as selectors from '../selectors';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {key:'bydate'};
    }

    componentWillMount() {
        const { setError, clearError } = this.props;
    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {
        
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        
    }
    
    render() {
        const { key } = this.state;
        return (
            <div className="page container" id="home">
                <h1>Home</h1>
                <h3>React todo example</h3>
            </div>
        );
    }
}

export default connect(null, { setError, clearError, logout })(HomePage);
