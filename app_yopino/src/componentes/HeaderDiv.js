import React from 'react';
import { Header, ContenedorHeader, Titulo, ContenedorBotones} from '../elementos/Header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const HeaderDiv = ({titulo = ""}) => {
    return (
        <>
            <Header>

                <ContenedorHeader>
                    <Titulo>{titulo}</Titulo>
                    <ContenedorBotones>
                        <Link to={'/'} > <Button color="success">Home</Button> </Link>
                        <Button color="success">Opiniones</Button>
                    </ContenedorBotones>

                    <ContenedorBotones>
                        <Link to={"/iniciar-sesion"}> <Button color="success">Login</Button> </Link>
                    </ContenedorBotones>

                </ContenedorHeader>
            </Header>
        </>
    )
}

export default HeaderDiv;