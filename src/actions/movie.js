import * as actionTypes from '../constants/actionTypes';
import {TMDB_API_KEY, TMDB_API_URL} from '../constants/auth';
import {fetchRequest, fetchReceive} from './fetch';
import { setTracks } from './track';

export const setTopMovies = () => {
    return dispatch => {
        dispatch(fetchRequest());
        getTopMovies(100).then(
            movies => {
                // [].concat.apply([], myArray) http://www.jstips.co/en/flattening-multidimensional-arrays-in-javascript/ flatterns multidimensional array
                setGeners([].concat.apply([], movies))
                    .then((movies) => {
                        dispatch(setMovies(movies));
                        dispatch(fetchReceive());
                    });
            }
        );

    }
};

export const setMovies = (movies) => {
    return {
        type: actionTypes.SET_MOVIES,
        movies
    }
};

export const selectMovie  = (selectedMovie) => {
    return dispatch => {
        dispatch(setSelectedMovie(selectedMovie));
        dispatch(setTracks(selectedMovie));
    }
};

export const setSelectedMovie = (selectedMovie) => {
    return {
        type: actionTypes.SET_SELECTED_MOVIE,
        selectedMovie
    }
};

export const setGeners = (movies) => {
    return fetch(`${TMDB_API_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`)
        .then((response) => response.json())
        .then((response) => {
            const genres = response.genres;
            movies.map((movie) => {
                movie.genres = [];
                return movie.genre_ids.map((genre_id) => {
                    for (let i = 0; i < genres.length; i++){
                        if(genres[i].id == genre_id){
                            movie.genres.push(genres[i].name);
                        }
                    }
                });
            });
            return movies;
        });
};

/**
 * Returns array of top movies
 * */
const getTopMovies = (topMoviesQuantity) => {
    const numberOfPages = topMoviesQuantity / 20; // 20 is default tmdb movies per page
    let topHundred = [];
    for(let i = 0; i < numberOfPages; i++){
        topHundred.push(new Promise((resolve, reject) => {
            fetch(`${TMDB_API_URL}/movie/top_rated?page=${i+1}&api_key=${TMDB_API_KEY}`)
                .then((response) => response.json())
                .then((movies) => {
                    resolve(movies.results);
                });
        }));
    }
    return Promise.all(topHundred);
};
