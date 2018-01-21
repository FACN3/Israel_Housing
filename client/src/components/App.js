import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchForm from './SearchForm';
import Header from './Header';
import MapContainer from './MapContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
      defaultCenter: { lat: 31.771959, lng: 35.217018 },
      defaultZoom: 8,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(coord) {
    this.setState({ defaultCenter: coord, defaultZoom: 12 });
    console.log(coord);
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={props => <SearchForm handleFormSubmit={this.handleSearch} />}
            />
            <Route
              exact
              path="/search"
              component={MapContainer}
              defaultCenter={this.state.defaultCenter}
              defaultZoom={this.state.defaultZoom}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
