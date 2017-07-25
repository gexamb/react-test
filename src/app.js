'use strict';
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { setError, clearError } from './actions/index';
import s from './styles/styles.scss';
import Header from './common/header';
// import Login from './pages/login';
import * as selectors from './selectors';

class App extends Component {

    constructor(props) {
        super(props);

        this.dismissAlert = this.dismissAlert.bind(this);
    }

    dismissAlert() {
        this.props.clearError();
    }

    componentWillReceiveProps(nextProps) {

        const tReason = _.get(nextProps.appdata, 'error.reason', '');

        switch(tReason) {
            default :
                // Handle different errors here
            break;
        }
    }

    getErrorMessage(){
        const {appdata, error} = this.props; 
        const errorMsg = _.get(appdata, 'error.message', error || null);
        let dismissable = _.get(appdata, 'error.dismissable', true); 
        let dismissCallback = dismissable ? this.dismissAlert : () => {};

        if(!_.isEmpty(errorMsg)){
            return (
                <div className="app-alert alert alert-danger danger-bg" onClick={dismissCallback}>
                    { dismissable ? <i className="fa fa-times"></i>  : null }
                    {errorMsg}
                </div>
            ); 
        } 
    }

    render() {
        const { children, appdata, auth, error} = this.props;
        // const component = _.has(auth, 'user') ? children : <Login/>;
        const component = children;
        return (
            <div className="col-xs-12">
                <Header />
                { this.getErrorMessage() }
                <div className={ appdata.error ? 'content-wrapper has-error' : 'content-wrapper'}>
                    {component}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        appdata: selectors.getAppData(state),
        auth: selectors.getLogin(state),
        error: selectors.getLoginError(state)
    }
}

export default connect(mapStateToProps, { setError, clearError })(App);
