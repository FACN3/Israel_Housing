import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchForm from './SearchForm';
import Header from './Header';
import MapContainer from './MapContainer';

class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={SearchForm} />
						<Route exact path="/search" component={MapContainer} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
