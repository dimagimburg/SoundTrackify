import React, { Component } from 'react';
import RootRouteWrapper from './components/RootRouteWrapper';
import App from './components/App';
import Callback from './components/Callback';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import localStorage from 'local-storage';
import * as authConstants from './constants/auth';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if(localStorage.get(authConstants.LOCAL_STORAGE_TOKEN_KEY)){
    store.dispatch(actions.checkInitialAuth(localStorage.get(authConstants.LOCAL_STORAGE_TOKEN_KEY)));
}

export default class Wrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={RootRouteWrapper} />
                        <Route path="/callback" component={Callback} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}