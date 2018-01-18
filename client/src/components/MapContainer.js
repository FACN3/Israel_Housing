import React, { Component } from 'react';
import MapWithMarker from './MapWithMarker';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      markers: [
        { lat: 31.705791, lng: 35.200657, showInfo: false },
        { lat: 31.801447, lng: 34.643497, showInfo: false },
        { lat: 32.699635, lng: 35.303547, showInfo: false },
        { lat: 32.017136, lng: 34.745441, showInfo: false },
        { lat: 32.109333, lng: 34.855499, showInfo: false },
        { lat: 32.794044, lng: 34.989571, showInfo: false },
        { lat: 32.919945, lng: 35.290146, showInfo: false },
        { lat: 32.166313, lng: 34.843311, showInfo: false },
        { lat: 31.894756, lng: 34.809322, showInfo: false },
        { lat: 31.771959, lng: 35.217018, showInfo: false }
      ]
    });
  }

  handleMarkerClick(marker) {
    this.state.markers.map(m => {
      m.showInfo = false;
    });
    marker.showInfo = true;
  }

  render() {
    return (
      <div>
        <MapWithMarker
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    );
  }
}

export default MapContainer;
