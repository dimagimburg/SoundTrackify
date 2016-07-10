import React, { Component } from 'react';
import MovieDetails from '../MovieDetails';

class SpotifyPartWrapper extends Component {
    render() {
        const { selectedMovie } = this.props;
        return (
            <div className="col-md-12 full-height">
                <div className="full-height">
                    <MovieDetails selectedMovie={selectedMovie}/>
                </div>
            </div>
        );
    }
}

export default SpotifyPartWrapper;