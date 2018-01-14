import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SearchForm />
      </div>
    );
  }
}

export default App;
