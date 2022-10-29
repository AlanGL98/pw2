import React from "react";
import img1 from '../img/Fortnite.jpg';
import './card-style.css';

const Card = props => {
return(
  <div className="card text-center">
    <div className="overflow">
      <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
    </div>
    <div className="card-body text-dark">
      <h4 className="card-title">Card Title</h4>
      <p className="card-text text-secondary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <a href="#" className="btn btn-outline-succes">Go Anywhere</a>
    </div>
  </div>
);

}

export default Card;