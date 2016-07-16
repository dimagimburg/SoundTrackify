import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './MovieItem.css';

class MovieItem extends Component {

    constructor(props){
        super(props);
        this.onMovieClicked = this.onMovieClicked.bind(this);
    }

    onMovieClicked(movie){
        const { onSelectedMovie } = this.props;
        onSelectedMovie(movie)
    }

    render(){
        const { movie, selectedMovie } = this.props;
        let styleName = 'movie';
        if(selectedMovie && selectedMovie.id == movie.id){
            styleName = 'movie-selected';
        }

        return (
            <li styleName={styleName} onClick={() => { this.onMovieClicked(movie) } }>
                {movie.title}
            </li>
        );
    }
}

export default CSSModules(MovieItem, styles);