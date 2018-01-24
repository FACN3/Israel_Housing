import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { InfoWindow } from 'react-google-maps';
import { Link } from 'react-router-dom';

const MapWithMarker = withGoogleMap(props => (
  <GoogleMap defaultZoom={props.defaultZoom} defaultCenter={props.defaultCenter}>
    {props.markers &&
      props.markers.map(marker => {
        return (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => props.onMarkerClick(marker.id)}
          >
            {marker.showInfo && (
              <InfoWindow
                position={{ lat: marker.lat, lng: marker.lng }}
                onCloseClick={() => props.onInfoClose(marker.id)}
              >
                <div>
                  <Link to="/details" onClick={() => props.onPopupClick(marker._id)}>
                    {marker.name}
                    <br />
                    {marker.price}
                    <br />
                    {marker.location}
                  </Link>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

export default MapWithMarker;
