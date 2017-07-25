import axios from 'axios';
import config from 'webpack-config-loader!../config.js';
import cookie from 'react-cookie';
import _ from 'lodash';
import store from 'store';

import { loadState, saveState } from '../utility/storage';

export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';
const DEFAULT_ERROR_TEXT = 'An unexpected error occurred. Please try again.';

console.info("API", config.apiBase);

// display error message to user
export function setError(message, reason, dismissable = true) {
    return { 
        type: SET_ERROR, 
        message:message, 
        reason:reason, 
        dismissable: dismissable };
}

// dismiss previously raised error message
export function clearError() {
    return { type: CLEAR_ERROR };
}

export function getCredentials() {

    let tData = {};

    let user = _.get(store.get('state'), 'auth.user', '');

    tData.token = user.token;
    tData.socket_token = user.socket_token;
    tData.app_id = user.app_id;
    tData.vams_app_id = user.app_id;
    tData.user_id = user.id;

    return tData;
}
