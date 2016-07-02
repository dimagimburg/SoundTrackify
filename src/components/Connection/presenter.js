import React, { Component } from 'react';

export default class Connection extends Component {
    render() {
        const { user, isAuthenticated, isFetching , onLogin, onLogout} = this.props;
        return (
            <div>
                {
                    isAuthenticated ?
                    <div>hi {user.username}<button onClick={onLogout}>Logout</button></div>
                    :
                    <div><button onClick={onLogin}>Login</button></div>
                }
            </div>
        )
    }
}