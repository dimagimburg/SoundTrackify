import * as actionTypes from '../constants/actionTypes';

export function fetchRequest() {
    return {
        type: actionTypes.FETCH_REQUEST,
        isFetching: true
    }
}

export function fetchReceive() {
    return {
        type: actionTypes.FETCH_RECEIVE,
        isFetching: false
    }
}