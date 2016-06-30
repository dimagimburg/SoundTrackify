import React from 'react';
import { connect } from 'react-redux';
import Stream from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

function mapStateToProps(state) {
    const { tracks, activeTrack } = state.track;
    const { user } = state.auth;
    return {
        user,
        tracks,
        activeTrack
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch),
        onPlay: bindActionCreators(actions.playTrack, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);