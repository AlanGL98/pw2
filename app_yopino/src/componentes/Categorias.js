import React from 'react';
import '../css/category.css';
import { Link } from 'react-router-dom';
import imgAccion from '../img/accion.jpg';
import imgTerror from '../img/terror.jpg';
import imgArcade from '../img/arcade.jpg';
import imgDeporte from '../img/deportes.jpg';
import imgEstrategia from '../img/estrategia.jpg';
import imgAventura from '../img/aventura.jpg';
import imgSimulacion from '../img/simulacion.jpg';
import imgDeMesa from '../img/demesa.jpg';
import imgMusical from '../img/musical.jpg';






const Categorias = () => {

  let data =[
    {
      id: 1,
      imgSrc: imgArcade,
      title: 'Arcade',
    },
    {
      id: 2,
      imgSrc: imgTerror,
      title: 'terror',
    },
    {
      id: 3,
      imgSrc: imgDeporte,
      title: 'Deportes',
    },
    {
      id: 4,
      imgSrc: imgEstrategia,
      title: 'Estrategia',
    },
    {
      id: 5,
      imgSrc: imgAccion,
      title: 'Accion',
    },
    {
      id: 6,
      imgSrc: imgAventura,
      title: 'Aventura',
    },
    {
      id: 7,
      imgSrc: imgDeMesa,
      title: 'Juegos de Mesa',
    },
    {
      id: 8,
      imgSrc: imgMusical,
      title: 'Musicales',
    },
    {
      id: 9,
      imgSrc: imgSimulacion,
      title: 'Simulacion',
    },
  ]

  return(
    <>
      <Link to={"/all-reviews"}><div className="category">
        {data.map((item, index)=>{
          return(
            <div className="pics" key={index} >
              <div className="titles">{item.title}</div>
               
              <img src={item.imgSrc} style={{width: '100%'}} />
            </div>
          )
        })}
    </div></Link>
    </>
  )
}

export default Categorias;