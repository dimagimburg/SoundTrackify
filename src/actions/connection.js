import * as actionTypes from '../constants/actionTypes';
import localStorage from 'local-storage';
import * as authConstants from '../constants/auth'

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
        var authURL =
            authConstants.AUTHORIZE_URL + "?client_id=" +
            authConstants.CLIENT_ID + "&redirect_uri=" +
            encodeURIComponent(authConstants.REDIRECT_URI) + "" +
            "&response_type=" + authConstants.RESPONSE_TYPE;

        var width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);

        var w = window.open(
            authURL,
            'Spotify',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
        );

        window.addEventListener("message", function(event) {
            var hash = JSON.parse(event.data);
            if (hash.type == 'access_token') {
                callback(hash.access_token);
            }
        }, false);

        var callback = function(token){
            return fetch(authConstants.API_USER_DETAILS, {headers: { 'Authorization' : `Bearer ${token}`}})
                .then((response) => response.json())
                .then((user) => {
                    localStorage.set(authConstants.LOCAL_STORAGE_TOKEN_KEY, token);
                    dispatch(receiveLogin(user));
                });
        };
    }
}

export function checkInitialAuth(token){
    return dispatch => {
        dispatch(requestLogin());
        return fetch(authConstants.API_USER_DETAILS, {headers: { 'Authorization' : `Bearer ${token}`}})
            .then((response) => response.json())
            .then((user) => {
                localStorage.set(authConstants.LOCAL_STORAGE_TOKEN_KEY, token);
                dispatch(receiveLogin(user));
            });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.remove(authConstants.LOCAL_STORAGE_TOKEN_KEY);
        dispatch(receiveLogout());
    }
}