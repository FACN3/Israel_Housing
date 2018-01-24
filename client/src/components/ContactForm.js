import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const ownerEmail = this.props.details.ownerEmail;
    const name = event.target.Name.value;
    const email = event.target.Email.value;
    const message = event.target.Message.value;
    const formData = { email: ownerEmail, name, message: email + ': ' + message };

    axios
      .post('/auth/sendmail', formData)
      .then(res => {
        window.alert('Your message was sent succesfully');
        this.props.history.push('/search');
      })
      .catch(err => {
        return (
          <div>
            <h1>There was a problem Sending your message</h1>
          </div>
        );
      });
  }

  render() {
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="name" type="text" name="Name" className="validate" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">email</i>
              <input id="email" type="email" name="Email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="message" name="Message" className="materialize-textarea" />
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <Link to="/search" className="waves-effect waves-light btn left red">
            <i className="material-icons left">arrow_back</i>Abort
          </Link>
          <button className="waves-effect waves-light btn right" type="submit">
            <i className="material-icons right">send</i>send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
