import React, { Component } from 'react';
import MoviesList from '../MoviesList';
import styles from './RootRouteWrapper.css';
import CSSModules from 'react-css-modules';

let RootRouteWrapper;

RootRouteWrapper = class RootRouteWrapper extends Component {
    render() {
        return (
            <div className="container-fluid" styleName="root-container">
                <div className="row" styleName="root-row">
                    <div className="col-md-4" styleName="root-left">
                        <MoviesList />
                    </div>
                    <div className="col-md-8">here the spotify</div>
                </div>
            </div>
        )
    }
};

export default CSSModules(RootRouteWrapper, styles);