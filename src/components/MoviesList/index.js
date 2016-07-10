import React from 'react';
import { connect } from 'react-redux';
import MovieList from './presenter';

function mapStateToProps(state) {
    const { movies } = state.movie;
    return {
        movies
    }
}

export default connect(mapStateToProps)(MovieList);