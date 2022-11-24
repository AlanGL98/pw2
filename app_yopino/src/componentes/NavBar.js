import React,{useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLinkPerfil
} from '../elementos/NavbarElements';

import { IUsuario,ICerrarSesion, IFavorite, IEdit, ICategory, IPost } from '../elementos/iconos/Iconos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';

const Navbar = () => {

  const [dropdown,setDropdown] = useState (false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }

  
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
              <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                <DropdownToggle className="btn-dark">
                  Mi perfil
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem><NavLinkPerfil to='/perfil-usuario'><IUsuario />Nombre de usuario</NavLinkPerfil></DropdownItem>
                  <DropdownItem><NavLinkPerfil to='/newpost'><IPost />Crear post</NavLinkPerfil></DropdownItem>
                  <DropdownItem><NavLinkPerfil to='/editar-perfil'><IEdit />Editar perfil</NavLinkPerfil></DropdownItem>
                  <DropdownItem><NavLinkPerfil to='/admin-categorias'><ICategory />Revisar categorias</NavLinkPerfil></DropdownItem>
                  <DropdownItem><NavLinkPerfil><IFavorite/>Favoritos</NavLinkPerfil></DropdownItem>
                  <DropdownItem><ICerrarSesion />Cerrar Sesion</DropdownItem>
                </DropdownMenu>
              </Dropdown>
               
        </NavBtn>
      </Nav>
    </>
  );
};


export default Navbar;