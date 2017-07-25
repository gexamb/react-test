import axios from 'axios';
import _ from 'lodash';
import config from 'webpack-config-loader!../config.js';
import { browserHistory } from 'react-router';
import { getCredentials, setError } from './index';

import { 
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAILURE,
    LOGIN_CLEAR_ERROR
} from './actionTypes';

export function login(data) {

    return (dispatch) => {
        axios.post(`${config.apiBase}/v1/cms/login`, data, {
            
        })
        .then(response => {
            dispatch({ type: LOGIN_SUCCESS, data:response.data});
            browserHistory.push('home');
        })
        .catch(err => {
            let e = err;
            if(_.has(err, 'error')) {
                e = err.error;
            }
            if(_.has(e, 'name')) {
                e = e.name;
            }
            if(_.has(e, 'data')) {
                e = e.data;
            }
            dispatch({type: LOGIN_FAILURE, data: e});
        });
    };
}

export function logout(data) {

    return (dispatch) => {
        dispatch({ type: LOGOUT});
    };
}

export function clearError(){
    return (dispatch) => {
        dispatch({type: LOGIN_CLEAR_ERROR});
    }
}
