import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MapWithMarker from './MapWithMarker';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleInfoClose = this.handleInfoClose.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/fetch')
      .then(properties => {
        const markers = properties.data.map(property => {
          const visibilityFlag = { showInfo: false, id: property._id };
          return Object.assign(property, visibilityFlag);
        });
        this.setState({ markers });
      })
      .catch(err => {
        return (
          <div>
            <h1>There was an error</h1>
          </div>
        );
      });
  }

  handleMarkerClick(markerId) {
    const newMarkers = this.state.markers.map(marker => {
      marker.showInfo = false;
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
      <div className="container">
        <MapWithMarker
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onInfoClose={this.handleInfoClose}
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.defaultZoom}
          onPopupClick={this.props.handlePopupClick}
        />
        <Link to="/" className="waves-effect waves-light btn left">
          <i className="material-icons left">arrow_back</i>
          Back
        </Link>
      </div>
    );
  }
}

export default MapContainer;
