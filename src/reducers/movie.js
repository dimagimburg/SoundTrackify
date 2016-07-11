import * as actionTypes from '../constants/actionTypes';

const initialState = {
    movies: [],
    selectedMovie: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES:
            return setMovies(state, action);
        case actionTypes.SET_SELECTED_MOVIE:
            return setSelectedMovie(state, action);
    }
    return state;
}

let setMovies = (state, action) => {
    const { movies } = action;
    return { ...state, movies };
};

let setSelectedMovie = (state, action) => {
    const { selectedMovie } = action;
    return { ...state, selectedMovie }
};
