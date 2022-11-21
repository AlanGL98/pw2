import React, { Component } from "react";
import * as Components from '../../../../elementos/profile';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import {IEdit } from '../../../../elementos/iconos/Iconos';

class Profile extends Component{
    render(){
        return(
        <>
            <Helmet>
                <title>Perfil</title>
            </Helmet>
            <Components.Container>
                <Components.Form>
                    <Components.Title>Mi perfil</Components.Title>
                    
                    <Components.Input type='image' />
                    <Components.Input type='text' placeholder='Nombre' disabled/>
                    <Components.Input type='text' placeholder='Apellido paterno' disabled/>
                    <Components.Input type='text' placeholder='Apellido materno' disabled/>
                    <Components.Input type='text' placeholder='Nombre de usuario' disabled/>
                    <Components.Input type='email' placeholder='Email' disabled/>
                    <Components.Input type='date' placeholder='Fecha de Nacimiento' disabled/>
                    <Components.Input type='password' placeholder='Contraseña' disabled/>
                    <Components.Input type='password' placeholder='Confirmar contraseña' disabled/>
                    <Link to={"/editar-perfil"}><Components.Button><IEdit/>Editar perfil</Components.Button></Link>
                </Components.Form>
            </Components.Container>
        </>
        );
    }
    
}

export default Profile;