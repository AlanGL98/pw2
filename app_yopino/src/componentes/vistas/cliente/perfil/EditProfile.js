import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import theme from "../../../../theme";
import * as Components from '../../../../elementos/editProfile';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import {ISave } from '../../../../elementos/iconos/Iconos';
import editProfile from '../../../../css/editProfile.css'
import Cookie from 'cookie-universal';
import { format } from 'date-fns'
import { Update } from "../../../../servicios/Usuarios";

const EditarPerfil = () => {
    
    const cookies = Cookie();
    const id = cookies.get('user_id');
    const dtUser=cookies.get('user');
    const [formularioEnviado, cambiarFormularioEnviado] = useState (false);
    const [user, setUser] = useState({
        name: dtUser.name,
        last_name1: dtUser.last_name1,
        last_name2: dtUser.last_name2,
        username: dtUser.username,
        email: dtUser.email,
        password: dtUser.password,
        birthdate: dtUser.birthdate,
        id_rol: '63685f0eebc852362f53c40f'
      });

    const [pass, setPass] = useState({confirmPassword: ""});
    const onChangePassword = (event) =>{
        setPass({
            ...pass,
            confirmPassword : event.target.value
        });
      }

      const onSubmitEdit= async (event)=>{
        if(user.password == pass.confirmPassword){
          event.preventDefault();
          console.log("Contraseñas correctas")
          console.log("info pa mandar", user)
          const resp = await Update(id, user);
          console.log("info pa recibir",resp);
  
        }else{
          console.log("Contraseñas no correctas")
  
          event.preventDefault();
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
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    last_name1: '',
                    last_name2: '',
                    username: '',
                    email: '',
                    birthdate: '',
                    password:'',
                    confirmPassword:''
                }}
                validate={(valores) => {
                    let errores = {};
                    
                    //validacion nombre
                    if(!valores.name){
                        errores.name = 'Porfavor ingresa un nombre'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                        errores.name = 'El nombre solo puede contener letras y espacios'
                    }

                    //validacion apellido1
                    if(!valores.last_name1){
                        errores.last_name1 = 'Porfavor ingresa un apellido'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.last_name1)){
                        errores.last_name1 = 'El apellido solo puede contener letras'
                    }
                    //validacion last_name2
                    if(!valores.last_name2){
                        errores.last_name2 = 'Porfavor ingresa un apellido'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.last_name2)){
                        errores.last_name2 = 'El apellido solo puede contener letras'
                    }

                    //validacion usuario
                    if(!valores.username){
                        errores.username = 'Porfavor ingresa un nombre de usuario'
                    }else if(!/^[a-zA-Z0-9_.+-]{1,40}$/.test(valores.username)){
                        errores.username = 'El nombre de usuario solo puede contener letras, numeros, puntos, guiones y guion bajo'
                    }

                    //validacion correo
                    if(!valores.email){
                        errores.email = 'Porfavor ingresa un correo electronico'
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
                    }

                    //validacion contraseña 1
                    if(!valores.password){
                        errores.password = 'Porfavor ingresa una contraseña'
                    }else if(!/^.{8,12}$/.test(valores.password)){
                        errores.password = 'La contraseña debe tener de 8 a 12 digitos'
                    }

                    //validacion contraseña 2
                    if(!valores.confirmPassword){
                        errores.confirmPassword = 'Porfavor ingresa una contraseña'
                    }else if((valores.confirmPassword).length>0){
                        if(valores.password1 !== valores.confirmPassword){
                            errores.confirmPassword = 'Las contraseñas no son iguales'
                        }
                        
                    }

                    return errores;
                }}
                onSubmit={(valores, {resetForm}) =>{
                    resetForm();
                    console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                }}
            >
                {( {errors} ) => (
                    <Form className="formulario" onSubmit={onSubmitEdit}>
                    <h1>Editar perfil</h1>
                        <div>
                            <label htmlFor="foto" >Cargar foto</label>
                            <Field 
                                type="file" 
                                id="fotoperfil" 
                                name="fotoperfil" 
                            />
                            <ErrorMessage name="name" component={() => (
                                <div className="error">{errors.name}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="name" >Nombre</label>
                            <Field 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Melanie Janeth" 
                                value={dtUser.name}
                                onChange={handleOnChangeInput}
                            />
                            <ErrorMessage name="name" component={() => (
                                <div className="error">{errors.name}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="last_name1" >Apellido paterno</label>
                            <Field 
                                type="text" 
                                id="last_name1" 
                                name="last_name1" 
                                placeholder="Loredo" 
                                value={dtUser.last_name1}
                                onChange={handleOnChangeInput}
                            />
                            <ErrorMessage name="last_name1" component={() => (
                                <div className="error">{errors.last_name1}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="last_name2" >Apellido materno</label>
                            <Field 
                                type="text" 
                                id="last_name2" 
                                name="last_name2" 
                                placeholder="Salinas"
                                value={dtUser.last_name2} 
                                onChange={handleOnChangeInput}
                            />
                            <ErrorMessage name="last_name2" component={() => (
                                <div className="error">{errors.last_name2}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="username">Nombre de usuario</label>
                            <Field 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="webitoloredo" 
                                value={dtUser.username}
                                onChange={handleOnChangeInput}
                            />
                            <ErrorMessage name="username" component={() => (
                                <div className="error">{errors.username}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="email">Correo</label>
                            <Field 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="correo@correo.com"
                            value={dtUser.email} 
                            onChange={handleOnChangeInput}
                            />
                            <ErrorMessage name="email" component={() => (
                                <div className="error">{errors.email}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="birthdate" >Fecha de nacimiento</label>
                            <Field 
                                type="date" 
                                id="birthdate" 
                                name="birthdate"  
                                value={dtUser.birthdate}
                                onChange={handleOnChangeInput}
                            />
                            <ErrorMessage name="birthdate" component={() => (
                                <div className="error">{errors.birthdate}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="password" >Contraseña</label>
                            <Field 
                            type="password" 
                            placeholder="*********" 
                            value={dtUser.password}
                            onChange={handleOnChangeInput}
                            id="password" 
                            name="password" 
                            />
                            <ErrorMessage name="password" component={() => (
                                <div className="error">{errors.password}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            <Field 
                            type="password" 
                            placeholder="*********" 
                            value={pass.confirmPassword}
                            onChange={onChangePassword}
                            name= "confirmPassword"
                            id= "confirmPassword"
                            />
                            <ErrorMessage name="confirmPassword" component={() => (
                                <div className="error">{errors.confirmPassword}</div>
                            )}/>
                        </div>
                        

                        <button type="submit"><ISave/>Guardar</button>
                        {formularioEnviado &&  <p className="exito">Formulario enviado con exito!</p>}
                    </Form>
                )}
{/* 
{( {values, errors,touched, handleSubmit, handleChange, handleBlur} ) => (
                    <Form className="formulario" onSubmit={handleSubmit}>
                    <h1>Editar perfil</h1>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            placeholder="John Doe" 
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                        </div>
                        <div>
                            <label htmlFor="correo">Correo</label>
                            <input 
                            type="email" 
                            id="correo" 
                            name="correo" 
                            placeholder="correo@correo.com" 
                            value={values.correo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                        </div>
                        <button type="submit">Guardar</button>
                        {formularioEnviado &&  <p className="exito">Formulario enviado con exito!</p>}
                    </Form>
                )} */}
            </Formik>
        </>

    );
}

export default EditarPerfil;