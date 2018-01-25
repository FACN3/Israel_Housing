import React, { Component } from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Header from './Header';
import MapContainer from './MapContainer';
import PropertyDetails from './PropertyDetails';
import ContactForm from './ContactForm';
import PropertyForm from './PropertyForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
      defaultCenter: { lat: 31.771959, lng: 35.217018 },
      defaultZoom: 8,
      details: {},
      currentUser: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({ currentUser: user });
  }

  handleSearch(coord, callback) {
    this.setState({ defaultCenter: coord, defaultZoom: 12 }, () => {
      callback();
    });
  }

  handleDetails(id) {
    axios
      .get(`/api/selected/${id}`)
      .then(property => {
        this.setState({ details: property.data });
      })
      .catch(err => {
        return <div>There was a problem getting the data</div>;
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header updateUser={this.updateUser} />
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
            <Route
              exact
              path="/contact"
              render={props => <ContactForm details={this.state.details} {...props} />}
            />
            <Route
              exact
              path="/new"
              render={props => <PropertyForm currentUser={this.state.currentUser} {...props} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
