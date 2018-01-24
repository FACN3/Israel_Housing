import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import('env2')('./config.env');
const key = process.env.Currency_API_KEY;

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeRate: 0,
    };
  }

  componentDidMount() {
    axios
      .get(`http://apilayer.net/api/live?access_key=${key}&currencies=USD,ILS&format=1`)
      .then(res => {
        const exchangeRate = res.data.quotes.USDILS;
        this.setState({ exchangeRate });
      })
      .catch(err => {
        return <div>Could not get the exchange Rate</div>;
      });
  }

  render() {
    return (
      <div className="container">
        <ul className="collection ">
          <li className="collection-item">
            <img
              className="materialboxed center"
              height="200"
              width="300"
              src={this.props.details.imageUrl}
              alt=""
            />
          </li>
          <li className="collection-item">
            <div className="">Price in NIS: {this.props.details.price}</div>
          </li>
          <li className="collection-item">
            <div className="">
              USD:{' '}
              {this.props.details.price &&
                Math.round(this.props.details.price / this.state.exchangeRate)}
            </div>
          </li>
          <li className="collection-item">
            <div className="">Location: {this.props.details.location}</div>
          </li>
        </ul>
        <Link to="/search" className="waves-effect waves-light btn left">
          <i className="material-icons left">arrow_back</i>
          Back
        </Link>
        <Link to="/contact" type="submit" className="waves-effect waves-light btn right">
          <i className="material-icons right">email</i>
          Contact
        </Link>
      </div>
    );
  }
}

export default PropertyDetails;
