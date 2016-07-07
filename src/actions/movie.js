import * as actionTypes from '../constants/actionTypes';
import {TMDB_API_KEY, TMDB_API_URL} from '../constants/auth';
import {fetchRequest, fetchReceive} from './fetch';

export function setTopMovies(){
    return dispatch => {
        dispatch(fetchRequest());
        getTopMovies(100).then(
            movies => {
                // [].concat.apply([], myArray) http://www.jstips.co/en/flattening-multidimensional-arrays-in-javascript/ flatterns multidimensional array
                dispatch(setMovies([].concat.apply([], movies)));
                dispatch(fetchReceive());
            }
        );

    }
}

export function setMovies(movies){
    return {
        type: actionTypes.SET_MOVIES,
        movies
    }
}

/**
 * Returns array of top movies
 * */
function getTopMovies(topMoviesQuantity){
    const numberOfPages = topMoviesQuantity / 20; // 20 is default tmdb movies per page
    let topHundred = [];
    for(let i = 0; i < numberOfPages; i++){
        topHundred.push(new Promise(function(resolve, reject) {
            fetch(`${TMDB_API_URL}/movie/top_rated?page=${i+1}&api_key=${TMDB_API_KEY}`)
                .then((response) => response.json())
                .then((movies) => {
                    resolve(movies.results);
                });
        }));
    }
    return Promise.all(topHundred);

}
