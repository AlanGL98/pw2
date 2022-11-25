import React from "react";
import '../css/card-style.css';


import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Card = props => {
console.log('obtengo',props._id, props.title);
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title} <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="success" /></h4>
        <p className="card-text text-secondary">
          {props.opinion_sinopsis}
        </p>
        <a href={`/post/${props._id}`} className="btn btn-outline-success">Ver mas...</a>
      </div>
    </div>
  )
}

export default Card;