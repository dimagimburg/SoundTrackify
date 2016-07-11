import React from 'react';
import { connect } from 'react-redux';
import MovieItem from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

let mapStateToProps = (state) => {
    const { selectedMovie } = state.movie;
    return {
        selectedMovie
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSelectedMovie: bindActionCreators(actions.setSelectedMovie, dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MovieItem);