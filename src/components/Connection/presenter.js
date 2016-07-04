import React, { Component } from 'react';
import styles from './Connection.css';

export default class Connection extends Component {
    render() {
        const { user, isAuthenticated, isFetching , onLogin, onLogout} = this.props;
        return (
            <div className={styles.connectionWrapper}>
                {
                    isAuthenticated ?
                    <div><span className={styles.connectionText}>Hi <b>{user.id}</b></span> <button className={"btn btn-default " + styles.logoutButton} onClick={onLogout}>Logout</button></div>
                    :
                    <div><button className={"btn btn-primary " + styles.loginButton} onClick={onLogin}>Login</button></div>
                }
            </div>
        )
    }
}