import * as actionTypes from '../constants/actionTypes';

export let fetchRequest = () => {
    return {
        type: actionTypes.FETCH_REQUEST,
        isFetching: true
    }
};

export let fetchReceive = () => {
    return {
        type: actionTypes.FETCH_RECEIVE,
        isFetching: false
    }
};