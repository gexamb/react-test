import * as actions from '../actions/actionTypes';
const INITIAL_STATE = {loggedin:false};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggedin:true,
                user: action.data
            };
        case actions.LOGIN_FAILURE: 
            return {
                error: action.data,
                loggedin:false,
            };
        case actions.LOGIN_CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        case actions.LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
