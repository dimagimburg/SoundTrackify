import React, { Component } from 'react';
import Stream from './components/Stream';

import configureStore from './stores/configureStore';
import * as actions from './actions';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import Callback from './components/Callback';

import SC from 'soundcloud';
import localStorage from 'local-storage';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if(localStorage.get('sc_session_token')){
    store.dispatch(actions.checkInitialAuth(localStorage.get('sc_session_token')));
}

export default class Wrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Stream} />
                        <Route path="/" component={Stream} />
                        <Route path="/callback" component={Callback} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}