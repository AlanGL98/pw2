import React from 'react';
import '../css/category.css';
import imgAccion from '../img/accion.jpg';
import imgTerror from '../img/terror.jpg';
import imgArcade from '../img/arcade.jpg';
import imgDeporte from '../img/deportes.jpg';
import imgEstrategia from '../img/estrategia.jpg';
import imgAventura from '../img/aventura.jpg';

const Categorias = () => {

  let data =[
    {
      id: 1,
      imgSrc: imgArcade,
    },
    {
      id: 2,
      imgSrc: imgTerror,
    },
    {
      id: 3,
      imgSrc: imgDeporte,
    },
    {
      id: 4,
      imgSrc: imgEstrategia,
    },
    {
      id: 5,
      imgSrc: imgAccion,
    },
    {
      id: 6,
      imgSrc: imgAventura,
    },
  ]

  return(
    <>
      <div className="category">
        {data.map((item, index)=>{
          return(
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{width: '100%'}}/>
            </div>
          )
        })}
    </div>
    </>
  )
}

export default Categorias;