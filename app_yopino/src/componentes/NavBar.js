import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  // OpcionSeleccionada,
  // Opciones,
  Opcion
} from '../elementos/NavbarElements';

import { IUsuario,ICerrarSesion } from '../elementos/iconos/Iconos';
import Cookie from 'cookie-universal';

const Navbar = () => {

  //const initialUser = localStorage.getItem('user');
  //console.log(initialUser);

  const cookies = Cookie();
  const user_id = cookies.get('user_id');
  
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Yopino</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          {/* activeStyle */}
          <NavLink to='/'> Inicio</NavLink> 
          <NavLink to='/categorias'> Categorias </NavLink>
          <NavLink to='/rankings'> Rankings </NavLink>
          <NavLink to='/all-reviews'> Reviews </NavLink>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/iniciar-sesion'>Ingresar</NavBtnLink>
          { user_id ?
          <Opcion to="perfil-usuario"><IUsuario />Mi perfil</Opcion>
          : "" }
          { user_id ?
          <Opcion><ICerrarSesion/>Cerrar sesion</Opcion>
          : "" }
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;