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
        case actionTypes.SET_USER:
            return setUser(state, action);
    }
    return state;
}

function setUser(state, action){
    const { user } = action;
    return { ...state, user };
}

function loginRequest(state, action){
    const { isFetching, isAuthenticated } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated };
}

function loginSuccess(state, action){
    const { isFetching, isAuthenticated } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated };
}

function logoutRequest(state, action){
    const { isFetching, isAuthenticated } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated };
}

function logoutSuccess(state, action){
    const { isFetching, isAuthenticated } = action;
    return { ...state, isFetching: isFetching, isAuthenticated: isAuthenticated };
}