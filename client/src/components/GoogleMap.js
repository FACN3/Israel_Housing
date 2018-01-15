import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAMarker = withGoogleMap(props => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: 32.699635, lng: 35.303547 }}>
		<Marker position={{ lat: 32.919945, lng: 35.290146 }} />
	</GoogleMap>
));

export default MapWithAMarker;
