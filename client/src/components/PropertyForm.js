import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import axios from 'axios';
import Select from 'react-select';
import keys from '../config/keys';
import { data } from '../citydata';

class PropertyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 32.699635,
      lng: 35.303547,
      imageUrl: '',
      selectedOption: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  uploadFile(files) {
    const image = files[0];
    const cloudName = keys.CLOUD_NAME;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const timestamp = Date.now() / 1000;
    const upload_preset = keys.IMAGE_UPLOAD_PRESET;
    const api_secret = keys.IMAGE_API_SECRET;
    const api_key = keys.IMAGE_API_KEY;
    const paramStr = `timestamp=${timestamp}&upload_preset=${upload_preset}${api_secret}`;
    const signature = sha1(paramStr);
    const params = {
      api_key,
      timestamp,
      upload_preset,
      signature,
    };

    let uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((err, res) => {
      if (err) {
        alert(err);
        return;
      }

      this.setState({ imageUrl: res.body.url });
      console.log('Upload Successful', JSON.stringify(res.body.url));
      console.log('State:', this.state);
    });
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { imageUrl } = this.state;
    const { lat, lng } = this.state.selectedOption.value;
    const name = event.target.name.value;
    const location = this.state.selectedOption.label;
    const p_type = event.target.type.value;
    const price = event.target.price.value;
    const size = event.target.size.value;
    const formData = { imageUrl, name, location, lat, lng, p_type, price, size };
    axios
      .post('/api/create', formData)
      .then(res => {
        window.alert('Property was added succesfully');
        this.props.history.push('/search');
      })
      .catch(err => {
        return (
          <div>
            <h1>There was a problem Saving your Property</h1>
          </div>
        );
      });
  }

  render() {
    return (
      <div className="container">
        <Dropzone onDrop={this.uploadFile}>
          <img
            className="materialboxed center"
            height="200"
            width="300"
            src={this.state.imageUrl}
            alt="Upload Image"
          />
        </Dropzone>
        <form className="" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">description</i>
              <input id="name" name="name" type="text" className="validate" />
              <label htmlFor="name">Description</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">home</i>
              <input id="type" name="type" type="text" className="validate" />
              <label htmlFor="type">Type: e.g studio</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">create</i>
              <input id="size" name="size" type="number" className="validate" />
              <label htmlFor="size">Size(number of bedrooms)</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">attach_money</i>
              <input id="price" name="price" type="number" className="validate" />
              <label htmlFor="price">Price(ILS)</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">add_location</i>
              <Select
                placeholder="Select Location"
                id="location"
                name="location"
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={data}
              />
            </div>
          </div>
          <Link to="/" className=" btn left red">
            <i className="material-icons left">arrow_back</i>Abort
          </Link>
          <button className=" btn right" type="submit">
            <i className="material-icons right">send</i>send
          </button>
        </form>
      </div>
    );
  }
}

export default PropertyForm;
