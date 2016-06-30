import React, { Component } from 'react';
import Stream from './components/Stream';

import configureStore from './stores/configureStore';
import * as actions from './actions';
import { Provider } from 'react-redux';

const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Stream />
            </Provider>
        );
    }
}