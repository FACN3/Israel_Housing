import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Header from './Header';
import MapContainer from './MapContainer';
import PropertyDetails from './PropertyDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
      defaultCenter: { lat: 31.771959, lng: 35.217018 },
      defaultZoom: 8,
      details: {},
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
  }

  handleSearch(coord, callback) {
    this.setState({ defaultCenter: coord, defaultZoom: 12 }, () => {
      callback();
    });
  }

  handleDetails(id) {
    console.log(id);
    axios
      .get(`/api/selected/${id}`)
      .then(property => {
        this.setState({ details: property.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={props => <SearchForm handleFormSubmit={this.handleSearch} {...props} />}
            />
            <Route
              exact
              path="/search"
              render={props => (
                <MapContainer
                  defaultCenter={this.state.defaultCenter}
                  defaultZoom={this.state.defaultZoom}
                  handlePopupClick={this.handleDetails}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/details"
              render={props => <PropertyDetails details={this.state.details} {...props} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
