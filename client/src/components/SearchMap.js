import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

class SearchMap extends Component {
	render() {
		return (
			<div>
				<GoogleMap
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}

export default SearchMap;
