import React, { Component } from 'react';

class PropertyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 1000 * 30,
        maximumAge: 1000 * 60 * 60,
      };

      navigator.geolocation.getCurrentPosition(
        res => {
          const { latitude, longitude } = res.coords;
          this.setState({ lat: latitude, lng: longitude });
          console.log(this.state);
        },
        err => {
          return <div>We failed to get your location</div>;
        },
        options
      );
    }
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default PropertyForm;
