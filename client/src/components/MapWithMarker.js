import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { InfoWindow } from 'react-google-maps';
import PropertyInfo from './PropertyInfo';

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
                <PropertyInfo />
              </InfoWindow>
            }
          </Marker>
        );
      })}
  </GoogleMap>
));

export default MapWithMarker;
