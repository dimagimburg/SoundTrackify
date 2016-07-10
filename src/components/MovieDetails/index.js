import React from 'react';
import styles from './MovieDetails.css';
import CSSModules from 'react-css-modules';
import { TMDB_IMAGE_PREFIX } from '../../constants/tmdb';

const MovieDetails = (props) => {
    const { selectedMovie } = props;
    let movieDetailsRender;
    if(selectedMovie){
        movieDetailsRender =
            <div styleName="movie-wrapper">
                <div styleName="movie-background" className="full-height" style={{'background': `url(${TMDB_IMAGE_PREFIX}/w1280/${selectedMovie.backdrop_path})`}}></div>
                <div className="row">
                    <div className="col-md-2">
                        <img styleName="poster" src={`${TMDB_IMAGE_PREFIX}/w500/${selectedMovie.poster_path}`} />
                    </div>
                    <div className="col-md-10 no-padding">
                        <h4 className="no-margin" styleName="title">{selectedMovie.title}</h4>
                        <div styleName="description">{selectedMovie.overview}</div>
                    </div>
                </div>
                <div className="row" styleName="extra-details">
                    <div className="col-md-3">Released: {selectedMovie.release_date}</div>
                    <div className="col-md-2">Rating: {selectedMovie.vote_average}</div>
                    <div className="col-md-3">Category:  </div>
                </div>
            </div>;
    } else {
        movieDetailsRender = '';
    }
    return (
        <div className="full-height">
            {movieDetailsRender}
        </div>
    );
};

export default CSSModules(MovieDetails, styles);