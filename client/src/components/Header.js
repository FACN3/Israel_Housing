import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const iconStyling = {
  height: 70,
  width: 200,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: '',
    };
  }

  componentDidMount() {
    axios
      .get('auth/current_user')
      .then(user => {
        this.setState({ auth: user.data });
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderContent() {
    switch (this.state.auth) {
      case null:
        return;
      case '':
        return (
          <li>
            <a className="waves-effect waves-light btn-large red" href="auth/google">
              Login With Google
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a className="waves-effect waves-light btn-large red" href="/auth/logout">
              Logout
            </a>
          </li>
        );
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper red lighten-2">
            <Link to={'/'} className="brand-logo left">
              HH BnB
            </Link>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
