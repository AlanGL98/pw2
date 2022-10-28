import React from 'react';
import {Helmet} from 'react-helmet';
import HeaderDiv from '../HeaderDiv';

const InicioSesion = () => {
    return (  
        <>
            <Helmet>
                <title>Inicio de sesion</title>
            </Helmet>
            
            <HeaderDiv titulo="Iniciar sesion"/>
        </>
    );
}
 
export default InicioSesion;

