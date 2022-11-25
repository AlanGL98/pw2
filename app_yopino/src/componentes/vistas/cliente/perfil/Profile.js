import React, { Component } from "react";
import * as Components from '../../../../elementos/profile';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import {IEdit } from '../../../../elementos/iconos/Iconos';
import Cookie from 'cookie-universal';
import { format } from 'date-fns';

class Profile extends Component{
    
    render(){
        //Datos de usuario
        const cookies = Cookie();
        const user = cookies.get('user');
        const birhdate =format(new Date(user.birthdate), 'yyyy/mm/dd')
        return(
        <>
            <Helmet>
                <title>Perfil</title>
            </Helmet>
            <Components.Container>
                <Components.Form>
                    <Components.Title>Mi perfil</Components.Title>
                    
                    <Components.Input type='image' />
                    <Components.Input type='text' placeholder='Nombre' value={user.name} disabled/>
                    <Components.Input type='text' placeholder='Apellido paterno'value={user.last_name1} disabled/>
                    <Components.Input type='text' placeholder='Apellido materno' value={user.last_name2} disabled/>
                    <Components.Input type='text' placeholder='Nombre de usuario' value={user.username} disabled/>
                    <Components.Input type='email' placeholder='Email' value={user.email} disabled/>
                    <Components.Input type='text' placeholder='Fecha de Nacimiento'  value={birhdate} disabled/>
                    <Components.Input type='password' placeholder='Contraseña'value={user.password} disabled/>
                    <Link to={"/editar-perfil"}><Components.Button><IEdit/>Editar perfil</Components.Button></Link>
                </Components.Form>
            </Components.Container>
        </>
        );
    }
    
}

export default Profile;