import React ,{useState}from 'react';
import * as Components from '../../elementos/logsign';
import { Link } from 'react-router-dom';
import {GetAll} from '../../servicios/Usuarios';
// import {Helmet} from 'react-helmet';
// import HeaderDiv from '../HeaderDiv';


// const InicioSesion = () => {
//     return (  
//         <>
//             <Helmet>
//                 <title>Inicio de sesion</title>
//             </Helmet>
            
//             <HeaderDiv titulo="Iniciar sesion"/>

//         </>

        
//     );
// }

function InicioSesion() {
    const [signIn, toggle] = React.useState(true);

    
 //Aqui guardaremos todos los usuarios
    const [usuarios, setUsuarios]= useState([]);

    async function fetchData(){
        const data= await GetAll();
        setUsuarios(data);
    }
    fetchData();
    console.log(usuarios);

     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Crear cuenta</Components.Title>
                     <Components.Input type='text' placeholder='Nombre' />
                     <Components.Input type='text' placeholder='Apellidos' />
                     <Components.Input type='text' placeholder='Nombre de usuario' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Link to={"/"}><Components.Button>Registrarse</Components.Button></Link>
                    
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Iniciar Sesion</Components.Title>
                      <Components.Input type='text' placeholder='Usuario' />
                      <Components.Input type='password' placeholder='Password' />
                    
                      <Link to={"/"}><Components.Button>Iniciar Sesion</Components.Button></Link>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Bienvenido de vuelta</Components.Title>
                     <Components.Paragraph> Inicia sesión para seguir dando tus opiniones</Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}> Iniciar Sesión </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Bienvenido</Components.Title>
                       <Components.Paragraph>Llena tu informacion y comienza a opinar</Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>Registrarse</Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}
 
export default InicioSesion;

