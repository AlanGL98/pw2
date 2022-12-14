import React ,{useState}from 'react';
import * as Components from '../../elementos/logsign';
import {Register,Login} from '../../servicios/Usuarios';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useNavigate } from 'react-router';
import Cookie from 'cookie-universal';

function InicioSesion() {
    let navigate = useNavigate();
    const [signIn, toggle] = React.useState(true);
    const [user, setUser] = useState({  // Inicializo estas variables de estado con valores vacíos 
        name: "",
        last_name1: "",
        last_name2: "",
        username: "",
        email: "",
        password: "",
        birthdate: new Date(),
        rol:"",
        id_rol: '63685f0eebc852362f53c40f'
    });
    const [us, setUs] = useState({
        email: "",
        password: ""
    });
    // Este event es un parámetro que se puede recibir en todas las funciones que sean desencadenadas por un evento de React.
    // const [createUser, setCreateUser] = useState(false);

    const handleOnSubmitRegister = async (event) => {
        event.preventDefault();
        // console.log("jala");
        try {
            const id_rol = '63685f0eebc852362f53c40f';
            user.id_rol = id_rol;

            const obj = await Register(user);

            // setCreateUser(obj);

            if(obj){
                console.log("my object0:", obj);
            }
            // console.log("my object0:", user.id_rol);

        } catch (err) {
            console.log('error');
        }
    }

    // Esto se agrega porque al utilizar un valor como user.name, este no puede cambiar. Hay que utilizar el onChange para poder cambiar el valor de mi variable name
    const handleOnChangeInput = (event) => {
        const { name, value } = event.target; // Utilizo Destructuring, obtengo el name del input y el valor 
        setUser({
            ...user, // Esto es Destructuring, pone todos los atributos que estén contenidos en User, así sobreescribe la información con base en el name de mi input. 
            [name]: value
        }) // No tengo idea de por qué funciona si no hace referencia a los otros valores como email, password y photo
    }
    const handleOnSubmitLogin = async (event) => {
        event.preventDefault();
        console.log("jala");
        try {

            
            const obj = await Login(us);
            if(obj.data._id){
                const cookies = Cookie();
                cookies.set('user', obj.data);
                cookies.set('user_id', obj.data._id );
                cookies.set('user_rol', obj.data.id_rol );

                const cookieTemp = cookies.get('user');
                const cookieiD=cookies.get('user_id');
                console.log("Mi cookie: ", cookieTemp.name, 'Mi id: ', cookieiD);

                console.log("my object0:", obj.data._id);
                console.log("my rolid:", obj.data.id_rol);
            }else{
                console.log('error');
            }
            
            if(user != null){
                navigate('/');
            }

        } catch (err) {

        }
    }

    const handleOnChangeInputLogin = (event) => {
        const { name, value } = event.target; // Utilizo Destructuring, obtengo el name del input y el valor 
        setUs({
            ...us, // Esto es Destructuring, pone todos los atributos que estén contenidos en User, así sobreescribe la información con base en el name de mi input. 
            [name]: value
        }) // No tengo idea de por qué funciona si no hace referencia a los otros valores como email, password y photo
    }

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                {/* {createUser && (
                    <Navigate to="/" replace={true}/>
                )} */}
                <Components.Form onSubmit={handleOnSubmitRegister}>
                    <Components.Title>Crear cuenta</Components.Title>
                    <Components.Input type='text' name="name" value={user.name} onChange={handleOnChangeInput} placeholder='Nombre' />
                    <Components.Input type='text' name="last_name1" value={user.last_name1} onChange={handleOnChangeInput} placeholder='Apellido paterno' />
                    <Components.Input type='text' name="last_name2" value={user.last_name2} onChange={handleOnChangeInput} placeholder='Apellido materno' />
                    <Components.Input type='text' name="username" value={user.username} onChange={handleOnChangeInput} placeholder='Nombre de usuario' />
                    <Components.Input type='email' name="email" value={user.email} onChange={handleOnChangeInput} placeholder='Email' />
                    <Components.Input type='password' name="password" value={user.password} onChange={handleOnChangeInput} placeholder='Contraseña' />
                    <Components.Input type='password' placeholder='Confirmar contraseña' />
                    <Components.Input type='date' name="birthdate" value={user.birthdate} onChange={handleOnChangeInput} placeholder='Fecha de nacimiento' />
                    
                    <br></br>
                    <Components.Paragraph>Selecciona tu rol</Components.Paragraph>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel value="usuario" control={<Radio />} label="Usuario" />
                    <FormControlLabel value="critico" control={<Radio />} label="Critico" />
                     </RadioGroup>
                    
                    <Components.Button type='submit'>Registrarse</Components.Button>

                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={handleOnSubmitLogin}>
                    <Components.Title>Iniciar Sesion</Components.Title>
                    <Components.Input type='email' name="email" value={us.email} onChange={handleOnChangeInputLogin} placeholder='Email' />
                    <Components.Input type='password' name="password" value={us.password} onChange={handleOnChangeInputLogin} placeholder='Password' />

                    <Components.Button href="/" type='submit'>Iniciar Sesion</Components.Button>
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