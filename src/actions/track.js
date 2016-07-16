import * as actionTypes from '../constants/actionTypes';
import {fetchRequest, fetchReceive} from './fetch';
import * as spotifyConstants from '../constants/spotify';

export const setTracks = (selectedMovie) => {
    return dispatch => {
        dispatch(clearCurrentAlbum());
        dispatch(fetchRequest());
        getTracksForMovie(selectedMovie)
            .then((response) => {
                if(response.albums.items.length){
                    fetch(response.albums.items[0].href)
                        .then(response => response.json())
                        .then((response) => {
                            dispatch(setCurrentAlbum(response));
                            dispatch(fetchReceive());
                        });
                } else {
                    // TODO : HALNDLE SITUATION WHEN NO ALBUMS
                    dispatch(fetchReceive());
                }
            });
    }
};

const setCurrentAlbum = (album) => {
    return {
        type: actionTypes.SET_CURRENT_ALBUM,
        album
    }
};

const clearCurrentAlbum = () => {
    return {
        type: actionTypes.CLEAR_CURRENT_ALBUM
    }
};

const getTracksForMovie = (selectedMovie) => {
    return getAlbum(selectedMovie);
};

const getAlbum = (selectedMovie) => {
    return fetch(`${spotifyConstants.SPOTIFY_API_URL}${spotifyConstants.SPOTIFY_API_SEARCH}?q=${encodeURIComponent(selectedMovie.title)}+soundtrack&type=album`)
        .then((response) => response.json());
};