import React, { Component } from 'react';

export default class Connection extends Component {
    render() {
        const { user, isAuthenticated, isFetching , onLogin, onLogout} = this.props;
        return (
            <div>
                {
                    isAuthenticated ?
                    <div>Hi <b>{user.username}</b><button className="btn btn-default" onClick={onLogout}>Logout</button></div>
                    :
                    <div><button className="btn btn-primary" onClick={onLogin}>Login</button></div>
                }
            </div>
        )
    }
}