import React, { Component } from 'react';
import MapWithMarker from './MapWithMarker';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      defaultCenter: this.props.defaultCenter,
      defaultZoom: this.props.defaultZoom,
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleInfoClose = this.handleInfoClose.bind(this);
  }

  componentDidMount() {
    this.setState({
      markers: [
        { id: 0, lat: 31.705791, lng: 35.200657, showInfo: false },
        { id: 1, lat: 31.801447, lng: 34.643497, showInfo: false },
        { id: 2, lat: 32.699635, lng: 35.303547, showInfo: false },
        { id: 3, lat: 32.017136, lng: 34.745441, showInfo: false },
        { id: 4, lat: 32.109333, lng: 34.855499, showInfo: false },
        { id: 5, lat: 32.794044, lng: 34.989571, showInfo: false },
        { id: 6, lat: 32.919945, lng: 35.290146, showInfo: false },
        { id: 7, lat: 32.166313, lng: 34.843311, showInfo: false },
        { id: 8, lat: 31.894756, lng: 34.809322, showInfo: false },
        { id: 9, lat: 31.771959, lng: 35.217018, showInfo: false },
      ],
    });
  }

  handleMarkerClick(markerId) {
    const newMarkers = this.state.markers.map(marker => {
      if (marker.id === markerId) {
        marker.showInfo = true;
        return marker;
      }
      return marker;
    });
    this.setState({ markers: newMarkers });
  }

  handleInfoClose(markerId) {
    const newMarkers = this.state.markers.map(marker => {
      if (marker.id === markerId) {
        marker.showInfo = false;
        return marker;
      }
      return marker;
    });
    this.setState({ markers: newMarkers });
  }

  render() {
    return (
      <div>
        <MapWithMarker
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onInfoClose={this.handleInfoClose}
          defaultCenter={this.state.defaultCenter}
          defaultZoom={this.state.defaultZoom}
        />
      </div>
    );
  }
}

export default MapContainer;
