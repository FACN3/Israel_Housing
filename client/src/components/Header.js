import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">
              HH BnB
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
