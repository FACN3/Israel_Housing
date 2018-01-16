import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAMarker = withGoogleMap(props => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: 32.699635, lng: 35.303547 }}>
		{props.markers &&
			props.markers.map((marker, index) => {
				return <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />;
			})}
	</GoogleMap>
));

export default MapWithAMarker;
