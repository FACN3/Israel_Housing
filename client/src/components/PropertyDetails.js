import React from 'react';
import { Link } from 'react-router-dom';

const PropertyDetails = props => {
  return (
    <div className="container">
      <ul className="collection ">
        <li className="collection-item">
          <img
            className="materialboxed center"
            height="200"
            width="300"
            src={props.details.imageUrl}
          />
        </li>
        <li className="collection-item">
          <div className="">Price in NIS:{props.details.price}</div>
        </li>
        <li className="collection-item">
          <div className="">
            USD:{props.details.price && Math.round(props.details.price / 3.42)}
          </div>
        </li>
        <li className="collection-item">
          <div className="">Location:{props.details.location}</div>
        </li>
      </ul>
      <Link to="/search" className="waves-effect waves-light btn left">
        <i className="material-icons left">arrow_back</i>
        Back
      </Link>

      <form action="mailto:hoslackochieng@gmail.com" method="post" enctype="text/plain">
        <button type="submit" className="waves-effect waves-light btn right">
          <i className="material-icons right">email</i>
          Contact
        </button>
      </form>
    </div>
  );
};

export default PropertyDetails;
