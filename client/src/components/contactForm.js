import React, { Component } from 'react';
const mailer = require('node-mailer');

class contactForm extends Component {
  render() {
    return (
      <div>
        <form method="POST">
          <input name="Name" label="Enter your email" type="text" />
          <textarea name="Email" label="Enter your message" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default contactForm;
