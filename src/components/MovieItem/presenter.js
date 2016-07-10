import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './MovieItem.css';

class MovieItem extends Component {
    render(){
        const { movie, selectedMovie, onSelectedMovie } = this.props;
        let styleName = 'movie';
        if(selectedMovie && selectedMovie.id == movie.id){
            styleName = 'movie-selected';
        }

        return (
            <li styleName={styleName} onClick={onSelectedMovie.bind(null,movie)}>
                {movie.title}
            </li>
        );
    }
}

export default CSSModules(MovieItem, styles);