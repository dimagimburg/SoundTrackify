import React, { Component } from 'react';
import styles from './Connection.css';

export default class Connection extends Component {
    render() {
        const { user, isAuthenticated, isFetching , onLogin, onLogout} = this.props;
        return (
            <div className={styles.connectionWrapper}>
                {
                    isAuthenticated ?
                    <div><span className={styles.connectionText}>Hi <b>{user.username}</b></span> <button className="btn btn-default" onClick={onLogout}>Logout</button></div>
                    :
                    <div><button className="btn btn-primary" onClick={onLogin}>Login</button></div>
                }
            </div>
        )
    }
}