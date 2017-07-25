import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import AppData from './reducer_app';
import Auth from './reducer_auth';

const rootReducer = combineReducers({
    routing: routerReducer,
    appData: AppData,
    auth: Auth
});

export default rootReducer;
