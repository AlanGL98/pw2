import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import theme from "../../../../theme";
import * as Components from '../../../../elementos/editProfile';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import {ISave } from '../../../../elementos/iconos/Iconos';
import editProfile from '../../../../css/editProfile.css'

const EditarPerfil = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState (false);
    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido1: '',
                    apellido2: '',
                    username: '',
                    correo: '',
                    datebirth: '',
                    password1:'',
                    password2:''
                }}
                validate={(valores) => {
                    let errores = {};
                    
                    //validacion nombre
                    if(!valores.nombre){
                        errores.nombre = 'Porfavor ingresa un nombre'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    //validacion apellido1
                    if(!valores.apellido1){
                        errores.apellido1 = 'Porfavor ingresa un apellido'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido1)){
                        errores.apellido1 = 'El nombre solo puede contener letras'
                    }
                    //validacion apellido2
                    if(!valores.apellido2){
                        errores.apellido2 = 'Porfavor ingresa un apellido'
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido2)){
                        errores.apellido2 = 'El nombre solo puede contener letras'
                    }

                    //validacion usuario
                    if(!valores.user){
                        errores.user = 'Porfavor ingresa un nombre de usuario'
                    }else if(!/^[a-zA-Z0-9_.+-]{1,40}$/.test(valores.user)){
                        errores.user = 'El nombre de usuario solo puede contener letras, numeros, puntos, guiones y guion bajo'
                    }

                    //validacion correo
                    if(!valores.correo){
                        errores.correo = 'Porfavor ingresa un correo electronico'
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
                    }

                    //validacion contraseña 1
                    if(!valores.password1){
                        errores.password1 = 'Porfavor ingresa una contraseña'
                    }else if(!/^.{8,12}$/.test(valores.password1)){
                        errores.password1 = 'La contraseña debe tener de 8 a 12 digitos'
                    }

                    //validacion contraseña 2
                    if(!valores.password2){
                        errores.password2 = 'Porfavor ingresa una contraseña'
                    }else if((valores.password2).length>0){
                        if(valores.password1 !== valores.password2){
                            errores.password2 = 'Las contraseñas no son iguales'
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
                    <Form className="formulario">
                    <h1>Editar perfil</h1>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Melanie Janeth" 
                            />
                            <ErrorMessage name="nombre" component={() => (
                                <div className="error">{errors.nombre}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="apellido1">Apellido paterno</label>
                            <Field 
                                type="text" 
                                id="apellido1" 
                                name="apellido1" 
                                placeholder="Loredo" 
                            />
                            <ErrorMessage name="apellido1" component={() => (
                                <div className="error">{errors.apellido1}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="apellido2">Apellido materno</label>
                            <Field 
                                type="text" 
                                id="apellido2" 
                                name="apellido2" 
                                placeholder="Salinas" 
                            />
                            <ErrorMessage name="apellido2" component={() => (
                                <div className="error">{errors.apellido2}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="user">Nombre de usuario</label>
                            <Field 
                                type="text" 
                                id="user" 
                                name="user" 
                                placeholder="webitoloredo" 
                            />
                            <ErrorMessage name="user" component={() => (
                                <div className="error">{errors.user}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="correo">Correo</label>
                            <Field 
                            type="email" 
                            id="correo" 
                            name="correo" 
                            placeholder="correo@correo.com" 
                            />
                            <ErrorMessage name="correo" component={() => (
                                <div className="error">{errors.correo}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="date">Fecha de nacimiento</label>
                            <Field 
                                type="date" 
                                id="datebirth" 
                                name="datebirth"  
                            />
                            <ErrorMessage name="datebirth" component={() => (
                                <div className="error">{errors.datebirth}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <Field 
                            type="password" 
                            id="password1" 
                            name="password1" 
                            placeholder="*********" 
                            />
                            <ErrorMessage name="password1" component={() => (
                                <div className="error">{errors.password1}</div>
                            )}/>
                        </div>
                        <div>
                            <label htmlFor="password">Confirmar contraseña</label>
                            <Field 
                            type="password" 
                            id="password2" 
                            name="password2" 
                            placeholder="*********" 
                            />
                            <ErrorMessage name="password2" component={() => (
                                <div className="error">{errors.password2}</div>
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