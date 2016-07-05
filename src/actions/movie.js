import * as actionTypes from '../constants/actionTypes';
import {TMDB_API_KEY, TMDB_API_URL} from '../constants/auth';
import {fetchRequest, fetchReceive} from './fetch';

export function setTopMovies(){
    return dispatch => {
        dispatch(fetchRequest());
        return fetch(TMDB_API_URL + '/movie/top_rated?api_key=' + TMDB_API_KEY)
            .then((response) => response.json())
            .then((movies) => {
                dispatch(setMovies(movies.results));
                dispatch(fetchReceive());
            });
    }
}

function setMovies(movies){
    return {
        type: actionTypes.SET_MOVIES,
        movies
    }
}
