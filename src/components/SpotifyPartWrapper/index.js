import React from 'react';
import { connect } from 'react-redux';
import SpotifyPartWrapper from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

let mapStateToProps = (state) => {
    const { selectedMovie } = state.movie;
    return {
        selectedMovie
    }
};

export default connect(mapStateToProps)(SpotifyPartWrapper);