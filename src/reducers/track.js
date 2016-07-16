import * as actionTypes from '../constants/actionTypes';

const initialState = {
    album: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_ALBUM:
            return setCurrentAlbum(state, action);
        case actionTypes.CLEAR_CURRENT_ALBUM:
            return clearCurrentAlbum(state, action);
    }
    return state;
}

const setCurrentAlbum = (state, action) => {
    const { album } = action;
    return { ...state, album };
};

const clearCurrentAlbum = (state, action) => {
    return { ...state, album: null };
};