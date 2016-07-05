import React from 'react';
import { connect } from 'react-redux';
import MovieList from './presenter';
//import { bindActionCreators } from 'redux';
//import * as actions from '../../actions';

function mapStateToProps(state) {
    const { movies } = state.movie;
    return {
        movies
    }
}

/*function mapDispatchToProps(dispatch) {
    return {
        onLogin: bindActionCreators(actions.loginUser, dispatch),
        onLogout: bindActionCreators(actions.logoutUser, dispatch)
    };
}*/

export default connect(mapStateToProps)(MovieList);