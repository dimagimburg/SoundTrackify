import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from './track';
import connection from './connection';

export default combineReducers({
    connection,
    track,
    routing: routerReducer
});