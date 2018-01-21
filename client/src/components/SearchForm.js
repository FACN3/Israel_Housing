import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const data = require('../citydata');

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.selectedOption.value, () => {
      this.props.history.push('/search');
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Select
            name="form-field-name"
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={data.data}
          />
          <button className="btn" type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
