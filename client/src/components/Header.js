import React from 'react';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            HH BnB
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
