import React, {Component} from 'react';
import styles from './TracksList.css';
import CSSModules from 'react-css-modules';

class TracksList extends Component {
    render() {
        const list = [];
        if(this.props.album){
            this.props.album.tracks.items.map((track) => {
                list.push(<div>{track.name}</div>);
            })
        }
        return(
            <div styleName="track-list-container">
                {list}
            </div>
        );
    }
}

export default CSSModules(TracksList, styles);
