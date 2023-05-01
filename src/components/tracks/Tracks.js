import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';

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
                <h1>{heading}</h1>
                
              </>
            )
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
