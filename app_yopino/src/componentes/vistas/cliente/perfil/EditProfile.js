import React, { Component } from "react";
import * as Components from '../../../../elementos/editProfile';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import {ISave } from '../../../../elementos/iconos/Iconos';

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
                    <Components.Input type='text' placeholder='Nombre'/>
                    <Components.Input type='text' placeholder='Apellido paterno'/>
                    <Components.Input type='text' placeholder='Apellido materno'/>
                    <Components.Input type='text' placeholder='Nombre de usuario'/>
                    <Components.Input type='email' placeholder='Email'/>
                    <Components.Input type='date' placeholder='Fecha de Nacimiento'/>
                    <Components.Input type='password' placeholder='Contraseña'/>
                    <Components.Input type='password' placeholder='Confirmar contraseña'/>
                    <Link to={"/"}><Components.Button><ISave/>Guardar</Components.Button></Link>
                </Components.Form>
            </Components.Container>
        </>
        );
    }
    
}

export default Profile;