import React, {Component} from 'react';
import styles from './MoviesList.css';
import CSSModules from 'react-css-modules';

let MoviesList;

MoviesList = class extends Component {
    render() {
        console.log('props');
        console.log(this.props);
        const { movies } = this.props;
        return (
            <div>
                <ul styleName="movies-list">
                    {
                        movies.map(function(movie){
                            return <li key={movie.id} styleName="movie">{movie.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
};

export default CSSModules(MoviesList, styles);
