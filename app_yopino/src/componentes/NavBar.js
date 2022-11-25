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

import Cookie from 'cookie-universal';

import { IUsuario,ICerrarSesion, IFavorite, IEdit, ICategory, IPost } from '../elementos/iconos/Iconos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
import { Divider } from '@mui/material';

const Navbar = () => {

  const [dropdown,setDropdown] = useState (false);

  const cookies = Cookie();
  const user_id = cookies.get('user_id');
  const rol_id = cookies.get('user_rol');

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  }
  function logout(){
    cookies.removeAll();
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
          {user_id == undefined ?
          <NavBtnLink to='/iniciar-sesion'>Ingresar</NavBtnLink>
          :
          <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                <DropdownToggle className="btn-dark">
                  Mi perfil
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem><NavLinkPerfil to='/perfil-usuario'><IUsuario />Nombre de usuario</NavLinkPerfil></DropdownItem>
                  <Divider/>
                  {
                    rol_id === '63685e73ebc852362f53c40d' || rol_id === '63685c15ebc852362f53c40c'?  
                  <DropdownItem><NavLinkPerfil to='/newpost'><IPost />Crear post</NavLinkPerfil></DropdownItem>
                  : ""
                  }
                  <Divider/>
                  <DropdownItem><NavLinkPerfil to='/editar-perfil'><IEdit />Editar perfil</NavLinkPerfil></DropdownItem>
                  <Divider/>
                  {
                    rol_id === '63685c15ebc852362f53c40c' ?                   
                    <DropdownItem><NavLinkPerfil to='/admin-categorias'><ICategory />Revisar categorias</NavLinkPerfil></DropdownItem>
                    : ""
                  }
                  <Divider/>
                  <DropdownItem><NavLinkPerfil to ={`/favoritos/usuario/${user_id}`}><IFavorite/>Favoritos</NavLinkPerfil></DropdownItem>
                  <Divider/>
                  <DropdownItem href="/" onClick={logout}><ICerrarSesion />Cerrar Sesion</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          
          }
              

        </NavBtn>
      </Nav>
    </>
  );
};


export default Navbar;