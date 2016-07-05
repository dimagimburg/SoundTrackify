import * as actionTypes from '../constants/actionTypes';

const initialState = {
    movies: [],
    activeMovie: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return setMovies(state, action);
    }
    return state;
}

function setMovies(state, action) {
    const { movies } = action;
    return { ...state, movies };
}
