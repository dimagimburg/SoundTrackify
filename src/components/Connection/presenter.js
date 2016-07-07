import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Connection.css';

let Connection;

Connection = class Connection extends Component {
    render() {
        const { user, isAuthenticated, isFetching , onLogin, onLogout} = this.props;
        return (
            <div styleName="connection-wrapper">
                {
                    isAuthenticated && user ?
                    <div><span styleName="connection-text">Hi <b>{user.id}</b></span> <button className="btn btn-default" styleName="logout-button" onClick={onLogout}>Logout</button></div>
                    :
                    <div><button className="btn btn-primary" styleName="login-button" onClick={onLogin}>Login</button></div>
                }
            </div>
        )
    }
};

export default CSSModules(Connection, styles);