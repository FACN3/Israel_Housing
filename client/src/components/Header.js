import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
    };
  }

  componentDidMount() {
    axios
      .get('auth/current_user')
      .then(user => {
        this.setState({ currentUser: user.data });
      })
      .catch(err => {
        return (
          <div>
            <h1>There was a problem Login in</h1>
          </div>
        );
      });
  }

  renderContent() {
    switch (this.state.currentUser) {
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
          <div className="nav-wrapper red teal">
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
