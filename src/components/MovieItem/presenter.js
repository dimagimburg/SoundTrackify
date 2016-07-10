import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './MovieItem.css';

const MovieItem = (props) => {
    const { movie, selectedMovie, onSelectedMovie } = props;
    let styleName = 'movie';
    if(selectedMovie && selectedMovie.id == movie.id){
        styleName = 'movie-selected';
    }

    return (
        <li styleName={styleName} onClick={onSelectedMovie.bind(null,movie)}>
            {movie.title}
        </li>
    )
};

export default CSSModules(MovieItem, styles);