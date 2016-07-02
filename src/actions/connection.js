import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';
import localStorage from 'local-storage';

function requestLogin() {
    return {
        type: actionTypes.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false
    }
}

function receiveLogin(user) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user
    }
}

function loginError(message) {
    return {
        type: actionTypes.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

function requestLogout() {
    return {
        type: actionTypes.LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

export function loginUser() {
    return dispatch => {
        dispatch(requestLogin());
        SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });
        return SC.connect().then((session) => {
            fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
                .then((response) => response.json())
                .then((user) => {
                    localStorage.set('sc_session_token', session.oauth_token);
                    dispatch(receiveLogin(user));
                });
        });
    }
}

export function checkInitialAuth(token){
    return dispatch => {
        dispatch(requestLogin());
        return fetch(`//api.soundcloud.com/me?oauth_token=${token}`)
            .then((response) => response.json())
            .then((user) => {
                localStorage.set('sc_session_token', token);
                dispatch(receiveLogin(user));
            });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.remove('sc_session_token');
        dispatch(receiveLogout());
    }
}