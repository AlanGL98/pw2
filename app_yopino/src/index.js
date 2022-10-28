import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import InicioSesion from './componentes/vistas/InicioSesion';
import Categorias from './componentes/Categorias';
import Navbar from "./componentes/NavBar";
import Fondo from "./elementos/Fondo";


WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Contenedor>
        
        <Routes>
          <Route path="/iniciar-sesion" element ={<InicioSesion/>}/>
          <Route path="/categorias" element ={<Categorias/>}/>
          
          <Route path="/" element ={<App/>}/>
        </Routes>
          
          
        </Contenedor>
    </BrowserRouter>
    <Fondo />
  </React.StrictMode>
);

// No tocar esta parte
// const Index = () => {
//   return ( 
//     <App />
//    );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
