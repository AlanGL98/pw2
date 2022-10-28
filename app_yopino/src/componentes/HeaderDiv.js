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
                        <Link to={'/'} > <Button>Home</Button> </Link>
                        <Button>Opiniones</Button>
                        <Button>Categorias</Button>
                        <Button>Rankin</Button>
                    </ContenedorBotones>

                    <ContenedorBotones>
                        <Link to={"/iniciar-sesion"}> <Button>Login</Button> </Link>
                    </ContenedorBotones>

                </ContenedorHeader>
            </Header>
        </>
    )
}

export default HeaderDiv;