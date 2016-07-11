import * as actionTypes from '../constants/actionTypes';
import localStorage from 'local-storage';
import * as authConstants from '../constants/auth'
import { setTopMovies, setMovies } from './movie';

let requestLogin = () => {
    return {
        type: actionTypes.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false
    }
};

let receiveLogin = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true
    }
};

let loginError = (message) => {
    return {
        type: actionTypes.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
};

let requestLogout = () => {
    return {
        type: actionTypes.LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
};

let receiveLogout = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
};

let setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        user
    }
};

export let loginUser = () => {
    return dispatch => {
        dispatch(requestLogin());
        const authURL =
            authConstants.AUTHORIZE_URL + "?client_id=" +
            authConstants.CLIENT_ID + "&redirect_uri=" +
            encodeURIComponent(authConstants.REDIRECT_URI) + "" +
            "&response_type=" + authConstants.RESPONSE_TYPE;

        const width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);

        const w = window.open(
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
                    dispatch(receiveLogin());
                    dispatch(setUser(user));
                    dispatch(setTopMovies());
                });
        };
    }
};

export let checkInitialAuth = (token) => {
    return dispatch => {
        dispatch(requestLogin());
        return fetch(authConstants.API_USER_DETAILS, {headers: { 'Authorization' : `Bearer ${token}`}})
            .then(function(response){
                if(!response.ok){
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function(user){
                localStorage.set(authConstants.LOCAL_STORAGE_TOKEN_KEY, token);
                dispatch(receiveLogin());
                dispatch(setUser(user));
                dispatch(setTopMovies());
            })
            .catch(function(err){
                // TODO: handle errors
                console.log(err);
            });
    }
};

export let logoutUser = () => {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.remove(authConstants.LOCAL_STORAGE_TOKEN_KEY);
        dispatch(setMovies([]));
        dispatch(receiveLogout());
    }
};