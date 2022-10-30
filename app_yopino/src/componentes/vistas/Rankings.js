import React, {useState} from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../../elementos/RankingElements'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Cards from '../Cards'

function Ranking() {
    const [dropdown, setDropdown]=useState(false);
    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }

    return ( 
        <>
            <Helmet>
                <title>Yo Opino</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Rankings</Titulo>
                    <ContenedorBotones>
                        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
                            <DropdownToggle caret className="btn-dark">
                                Categorias
                            </DropdownToggle>

                            <DropdownMenu>
                                <DropdownItem>Arcade</DropdownItem>
                                <DropdownItem>Accion</DropdownItem>
                                <DropdownItem>Aventura</DropdownItem>
                                <DropdownItem>Terror</DropdownItem>
                                <DropdownItem>Musicales</DropdownItem>
                                <DropdownItem>Deportes</DropdownItem>
                                <DropdownItem>Juegos de mesa</DropdownItem>
                                <DropdownItem>Estrategia</DropdownItem>
                                <DropdownItem>Simulacion</DropdownItem>
                            </DropdownMenu>

                            </Dropdown>


                            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
                            <DropdownToggle caret className="btn-dark">
                                Ordenar
                            </DropdownToggle>

                            <DropdownMenu>
                                <DropdownItem>Mas recientes</DropdownItem>
                                <DropdownItem>Mas populares</DropdownItem>
                                <DropdownItem>Menos populares</DropdownItem>
                            </DropdownMenu>

                            </Dropdown>
                    </ContenedorBotones>
                </ContenedorHeader>
            </Header>
            
            <Cards />
        </>
     );
}

export default Ranking;