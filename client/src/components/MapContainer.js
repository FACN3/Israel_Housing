import React, { Component } from 'react';
import MapWithMarker from './MapWithMarker';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        { lat: 31.705791, lng: 35.200657 },
        { lat: 31.801447, lng: 34.643497 },
        { lat: 32.699635, lng: 35.303547 },
        { lat: 32.017136, lng: 34.745441 },
        { lat: 32.109333, lng: 34.855499 },
        { lat: 32.794044, lng: 34.989571 },
        { lat: 32.919945, lng: 35.290146 },
        { lat: 32.166313, lng: 34.843311 },
        { lat: 31.894756, lng: 34.809322 },
        { lat: 31.771959, lng: 35.217018 },
      ],
    };
  }

  render() {
    return (
      <div>
        <MapWithMarker
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={this.state.markers}
        />
      </div>
    );
  }
}

export default MapContainer;
