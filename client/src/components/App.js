import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchForm from './SearchForm';
import Header from './Header';
import SearchMap from './SearchMap';

class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={SearchForm} />
						<Route exact path="/search" component={SearchMap} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
