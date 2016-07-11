import React from 'react';
import { connect } from 'react-redux';
import Connection from './presenter';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

let mapStateToProps = (state) => {
    const { user, isAuthenticated, isFetching } = state.connection;
    return {
        user,
        isAuthenticated,
        isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onLogin: bindActionCreators(actions.loginUser, dispatch),
        onLogout: bindActionCreators(actions.logoutUser, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Connection);