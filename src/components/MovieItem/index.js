import React from 'react';
import { connect } from 'react-redux';
import MovieItem from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
    const { selectedMovie } = state.movie;
    return {
        selectedMovie
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedMovie: bindActionCreators(actions.selectMovie, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MovieItem);