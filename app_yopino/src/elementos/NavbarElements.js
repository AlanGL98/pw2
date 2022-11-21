import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  font-family: 'Jura', sans-serif;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #348519;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #74e34f;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #348519;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #348519;
  }
`;

export const OpcionSeleccionada = styled.div`
    width: 100%;
    //text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    //justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-right: 10px;
        //margin-left: 1.25rem; /* 20px */
    }
`;

export const Opciones = styled.div`
    background: white;
    color: white;
    position: absolute;
    font-size: 0.9rem;
    top: 38px;
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;

export const Opcion = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 10px; /* 20px */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: none;
    svg {
        width: 1.25rem;
        height: auto;
        //margin-right: 1.25rem; /* 20px */
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #74e34f;
    }
`;
