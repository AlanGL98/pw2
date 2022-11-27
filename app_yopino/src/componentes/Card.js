import React, { useState,useRef,useEffect} from "react";
import '../css/card-style.css';


import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Cookie from 'cookie-universal';
import { Create,Delete,GetOne } from '../servicios/Favoritos';

const Card = props => {
  
  const cookies = Cookie();
  const id = cookies.get('user_id');
  
  const isFirst = useRef(false);

  console.log('obtengo',props._id, props.title);

  const [favorite, setFavorite]= useState({
    user_id: id,
    opinion_id:props._id,
    active: ""
  });

    useEffect(()=>{
      console.log("inicio",isFirst.current)
      if(isFirst.current){
        
      console.log("despues ",isFirst.current)
        async function fetchData(){
          //Creo que el post se convierta en su favorite
          const dataFav= await Create(favorite);
      }
    
    
      fetchData();
      }
      // else{
      //   async function fetchData(){
      //     //Creo que el post se convierta en su favorite
      //     //const fav= GetOne(id);
      //     //const dataFav= await Delete(favorite);
      // }
    
    
      // fetchData();
      // }
      isFirst.current = true;
    },[favorite])

  function handleClick(value){


    setFavorite({
      ...favorite,
      user_id: id,
      opinion_id:props._id,
      active: isFirst.current
  })
    console.log(favorite);
 }
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title} 
        {
          id != undefined ?
          <Checkbox name = "active" id ="active"icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="success"onClick={()=>{handleClick(props._id)}} />
          :""
        }
        </h4>
        <p className="card-text text-secondary">
          {props.opinion_sinopsis}
        </p>
        <a href={`/post/${props._id}`} className="btn btn-outline-success">Ver mas...</a>
      </div>
    </div>
  )
}

export default Card;