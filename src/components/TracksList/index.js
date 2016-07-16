import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions'
import TracksList from './presenter';

let mapStateToProps = (state) => {
    const { album } = state.track;
    return {
        album
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTracks: bindActionCreators(actions.setTracks, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TracksList);