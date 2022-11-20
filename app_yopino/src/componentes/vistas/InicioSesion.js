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
        const [user, setUser] = this.useState({  // Inicializo estas variables de estado con valores vacíos 
            name: "",
            last_name1: "",
            last_name2: "",
            username: "",
            email: "",
            password: "",
            birthdate: "",
            id_rol:"63685f0eebc852362f53c40f",
            image: ""
        });

        // Este event es un parámetro que se puede recibir en todas las funciones que sean desencadenadas por un evento de React.
        const handleOnSubmitRegister=(event)=>{
            event.preventDefault();
            console.log("jala");
          }

          // Esto se agrega porque al utilizar un valor como user.name, este no puede cambiar. Hay que utilizar el onChange para poder cambiar el valor de mi variable name
          const handleOnChangeInput = (event) => { 
            const {name, value} = event.target; // Utilizo Destructuring, obtengo el name del input y el valor 
            setUser({
                ...user, // Esto es Destructuring, pone todos los atributos que estén contenidos en User, así sobreescribe la información con base en el name de mi input. 
                [name]: value
            }) // No tengo idea de por qué funciona si no hace referencia a los otros valores como email, password y photo
        } 
          
        return(
            <Components.Container>
                <Components.SignUpContainer signinIn={this.state.signIn}>
                    <form onSubmit={handleOnSubmitRegister}>
                        <Components.Form>
                            <Components.Title>Crear cuenta</Components.Title>
                            <Components.Input type='text' name="name" value={user.name} onChange={handleOnChangeInput} placeholder='Nombre' />
                            <Components.Input type='text' name="last_name1"value={user.last_name1} onChange={handleOnChangeInput}  placeholder='Apellido paterno' />
                            <Components.Input type='text' name="last_name2" value={user.last_name2} onChange={handleOnChangeInput} placeholder='Apellido materno' />
                            <Components.Input type='text' name="username" value={user.username} onChange={handleOnChangeInput} placeholder='Nombre de usuario' />
                            <Components.Input type='email' name="email" value={user.email} onChange={handleOnChangeInput} placeholder='Email' />
                            <Components.Input type='password' name="password" value={user.password} onChange={handleOnChangeInput} placeholder='Contraseña' />
                            <Components.Input type='password' placeholder='Confirmar contraseña' />
                            <Components.Input type='date' name="birthdate" value={user.birthdate} onChange={handleOnChangeInput} placeholder='Fecha de nacimiento' />
                            <Link to={"/"}><Components.Button>Registrarse</Components.Button></Link>
                        
                        </Components.Form>
                    </form>
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