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
import Profile from './componentes/vistas/cliente/perfil/Profile';
import EditProfile from './componentes/vistas/cliente/perfil/EditProfile';
import AdminCategorias from './componentes/vistas/admin/Categories';
import NewCategoria from './componentes/vistas/admin/NewCategory';
import Favoritos from './componentes/vistas/cliente/Favoritos';
import EditCategoria from './componentes/vistas/admin/EditCategory';

import Footer from './componentes/Footer';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <>
    <BrowserRouter>
      
      <Contenedor>
      <Navbar/> 
        <Routes>
          <Route path="/iniciar-sesion" element ={<InicioSesion/>}/>
          <Route path="/categorias" element ={<Categorias/>}/>
          <Route path="/all-reviews" element ={<Reviews/>}/>
          <Route path="/post/:id" element ={<Post/>}/>
          <Route path="/newpost" element ={<NewPost/>}/>
          <Route path="/rankings" element ={<Ranking/>}/>
          <Route path="/perfil-usuario" element ={<Profile/>}/>
          <Route path="/editar-perfil" element ={<EditProfile/>}/>
          <Route path="/admin-categorias" element ={<AdminCategorias/>}/>
          <Route path="/new-categoria" element ={<NewCategoria/>}/>
          <Route path="/favoritos/usuario/:id" element ={<Favoritos/>}/>
          <Route path="/edit-categoria" element ={<EditCategoria/>}/>
          
          <Route path="/" element ={<App/>}/>
        </Routes>
          
        <Footer />
        </Contenedor>
        
    </BrowserRouter>
    
    <Fondo />
  </>
);

// No tocar esta parte
// const Index = () => {
//   return ( 
//     <App />
//    );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
