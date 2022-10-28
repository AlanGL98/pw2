import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../elementos/NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Yopino</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle> Inicio</NavLink>
          <NavLink to='/categorias' activeStyle> Categorias </NavLink>
          <NavLink to='/-us' activeStyle> Rankings </NavLink>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/iniciar-sesion'>Ingresar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;