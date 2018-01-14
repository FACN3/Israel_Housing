import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="center">
          <input type="text" placeholder="enter city to search" />
          <button className="btn green">search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
