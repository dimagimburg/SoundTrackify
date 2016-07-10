import React, {Component} from 'react';
import styles from './MoviesList.css';
import CSSModules from 'react-css-modules';
import MovieItem from '../MovieItem';

class MoviesList extends Component {
    render() {
        const { movies } = this.props;
        return (
            <div>
                <ul styleName="movies-list">
                    {
                        movies.map(function(movie){
                            return <MovieItem key={movie.id} movie={movie} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CSSModules(MoviesList, styles);
