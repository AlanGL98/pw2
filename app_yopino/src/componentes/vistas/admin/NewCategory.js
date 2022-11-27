import React, { useState } from "react";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { Formik, ErrorMessage } from 'formik';

import * as Components from '../../../elementos/logsign';

import '../../../css/comentarios.css';

const NewPost = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState (false);
  return (
    <>
      <Formik
        initialValues={{
          nombre:'',
        }}

        validate={(valores) => {
          let errores = {};
          
          if(!valores.nombre){
            errores.nombre = 'Porfavor ingresa un nombre'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
            errores.nombre = 'El nombre solo puede contener letras y espacios'
        }

        return errores;
        }}

        onSubmit={(valores, {resetForm})=>{
          resetForm();
          console.log('Formulario enviado');
          cambiarFormularioEnviado(true);
          
         
        }}
      >   
        {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
         
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Crear categoría</Components.Title>
              <br></br>

              <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 200, height: 200 }}
                />
                 <br></br>
                 <Button color="success" variant="outlined" component="label">
                  Cargar imagen
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <br></br>
              <Components.Input 
                  type='text' 
                  id='nombre' 
                  name ='nombre' 
                  placeholder='Nombre'
                  value={values.nombre} 
                  onChange={handleChange}
                  onBlur={handleBlur}/>

                <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre} </div> )}/>
              <br></br>
              <Stack direction="row" alignItems="center" spacing={2}>
               
                

                <br></br><br></br>
                <a href='/admin-categorias' className="btn-newcomment spacing-down" float="right">Confirmar</a>
                {formularioEnviado &&  <p className="exito">Formulario enviado con exito!</p>}
                <br></br>
              </Stack>   
              
            </Components.Form>
          
        )} 
      </Formik>
    </>
    
  )
}
 
export default NewPost;