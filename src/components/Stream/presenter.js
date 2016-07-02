import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from '../../constants/auth';

class Stream extends Component {

    componentDidUpdate() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);

        if (!audioElement) { return; }

        const { activeTrack } = this.props;

        if (activeTrack) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }

    render () {
        const { tracks = [], activeTrack, onPlay } = this.props;

        return (
            <div>
                <div>
                    {
                        tracks.map((track, key) => {
                            return (
                                <div className="track" key={key}>
                                    {track.origin.title}
                                    <button type="button" onClick={() => onPlay(track)}>Play</button>
                                </div>
                            );
                        })
                    }
                </div>
                {
                    activeTrack ?
                        <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
                        null
                }
            </div>
        );
    }

}

export default Stream;