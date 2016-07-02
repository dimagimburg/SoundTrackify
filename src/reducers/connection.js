import * as actionTypes from '../constants/actionTypes';
import localStorage from 'local-storage';

const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.get('sc_session_token') ? true : false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return loginRequest(state, action);
        case actionTypes.LOGIN_SUCCESS:
            return loginSuccess(state, action);
        case actionTypes.LOGIN_FAILURE:
            return state;
        case actionTypes.LOGOUT_REQUEST:
            return logoutRequest(state, action);
        case actionTypes.LOGOUT_SUCCESS:
            return logoutSuccess(state, action);
        case actionTypes.LOGOUT_FAILURE:
            return state;
    }
    return state;
}

function loginRequest(state, action){
    const { isFetching, isAuthenticated } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated };
}

function loginSuccess(state, action){
    const { isFetching, isAuthenticated, user } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated, user };
}

function logoutRequest(state, action){
    const { isFetching, isAuthenticated } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated };
}

function logoutSuccess(state, action){
    const { isFetching, isAuthenticated } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated };
}