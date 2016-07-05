import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import connection from './connection';
import movie from './movie';

export default combineReducers({
    connection,
    movie,
    routing: routerReducer
});