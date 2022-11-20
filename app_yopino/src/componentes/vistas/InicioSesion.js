import React, {Component,useState} from "react";
import * as Components from '../../elementos/logsign';
import { Link } from 'react-router-dom';

class InicioSesion extends Component{
    state = {
        signIn: true,
    }

    toggle(_var){
        this.setState({signIn: _var});
    }

    render(){
        const [user, setUser] = useState({  // Inicializo estas variables de estado con valores vacíos 
            name: "",
            last_name1: "",
            last_name2: "",
            username: "",
            email: "",
            password: "",
            password: "",
            id_rol:"",
            image: ""
        });
        return(
            <Components.Container>
                <Components.SignUpContainer signinIn={this.state.signIn}>
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
   
                <Components.SignInContainer signinIn={this.state.signIn}>
                     <Components.Form>
                         <Components.Title>Iniciar Sesion</Components.Title>
                         <Components.Input type='text' placeholder='Usuario' />
                         <Components.Input type='password' placeholder='Password' />
                       
                         <Link to={"/"}><Components.Button>Iniciar Sesion</Components.Button></Link>
                     </Components.Form>
                </Components.SignInContainer>
   
                <Components.OverlayContainer signinIn={this.state.signIn}>
                    <Components.Overlay signinIn={this.state.signIn}>
   
                    <Components.LeftOverlayPanel signinIn={this.state.signIn}>
                        <Components.Title>Bienvenido de vuelta</Components.Title>
                        <Components.Paragraph> Inicia sesión para seguir dando tus opiniones</Components.Paragraph>
                        <Components.GhostButton onClick={() => this.toggle(true)}> Iniciar Sesión </Components.GhostButton>
                        </Components.LeftOverlayPanel>
   
                        <Components.RightOverlayPanel signinIn={this.state.signIn}>
                          <Components.Title>Bienvenido</Components.Title>
                          <Components.Paragraph>Llena tu informacion y comienza a opinar</Components.Paragraph>
                              <Components.GhostButton onClick={() => this.toggle(false)}>Registrarse</Components.GhostButton> 
                        </Components.RightOverlayPanel>
    
                    </Components.Overlay>
                </Components.OverlayContainer>
   
            </Components.Container>
        )
    }
}

export default InicioSesion;