import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import connection from './connection';
import movie from './movie';
import track from './track';

export default combineReducers({
    connection,
    movie,
    track,
    routing: routerReducer
});