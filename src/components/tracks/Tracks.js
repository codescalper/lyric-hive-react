import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { trackList, heading } = value;

          if (!trackList || trackList.length === 0) {
            return <Spinner />
          } else {
            return (
              <>
                <h2 className='text-center mb-4'>{heading}</h2>
                <div className="row">
                    {trackList.map(item=>(
                      <Track track={item.track} key={item.track.track_id} />
                    ))}
                </div>
                
              </>
            )
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
