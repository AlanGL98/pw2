import React from 'react';
import '../css/category.css';
import { Link } from 'react-router-dom';
// import imgAccion from '../img/accion.jpg';
// import imgTerror from '../img/terror.jpg';
// import imgArcade from '../img/arcade.jpg';
// import imgDeporte from '../img/deportes.jpg';
// import imgEstrategia from '../img/estrategia.jpg';
// import imgAventura from '../img/aventura.jpg';
// import imgSimulacion from '../img/simulacion.jpg';
// import imgDeMesa from '../img/demesa.jpg';
// import imgMusical from '../img/musical.jpg';
import { GetAll } from '../servicios/Categorias';
import Global from '../Global';

const Categorias = () => {

  const [categorias] = GetAll();

  return(
    <>
      <Link to={"/all-reviews"}>
        <div className="category">
          {
            categorias.map((item) => {
              return (
                <div className="pics" key={item._id} >
                  <div className="titles">{item.name}</div>

                  <img src={Global.url + 'secciones/get-image/' + item.image} style={{ width: '100%' }} />
                </div>
              )
            })
          }
        </div>
      </Link>
    </>
  )
}

export default Categorias;