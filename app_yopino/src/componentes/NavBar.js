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
          {/* activeStyle */}
          <NavLink to='/'> Inicio</NavLink> 
          <NavLink to='/categorias'> Categorias </NavLink>
          <NavLink to='/rankings'> Rankings </NavLink>
          <NavLink to='/all-reviews'> Reviews </NavLink>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/iniciar-sesion'>Ingresar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;