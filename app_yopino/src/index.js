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
import Reviews from "./componentes/vistas/Reviews";
import Post from "./componentes/vistas/Post";
import NewPost from "./componentes/vistas/NewPost";
import Ranking from './componentes/vistas/Rankings';
import Footer from './componentes/Footer';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Contenedor>
      <Navbar/> 
        <Routes>
          <Route path="/iniciar-sesion" element ={<InicioSesion/>}/>
          <Route path="/categorias" element ={<Categorias/>}/>
          <Route path="/all-reviews" element ={<Reviews/>}/>
          <Route path="/post" element ={<Post/>}/>
          <Route path="/newpost" element ={<NewPost/>}/>
          <Route path="/rankings" element ={<Ranking/>}/>
          
          <Route path="/" element ={<App/>}/>
        </Routes>
          
        <Footer />
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
