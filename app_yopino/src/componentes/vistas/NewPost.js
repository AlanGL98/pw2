import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import {ISave } from '../../elementos/iconos/Iconos';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Divider } from '@mui/material';
import { InputLabel } from "@mui/material";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { selectClasses } from '@mui/material/Select';


import * as Components from '../../elementos/logsign';
import { GetAll } from '../../servicios/Categorias';

import '../../css/comentarios.css';
import Cookie from 'cookie-universal';
import { Create } from '../../servicios/Opiniones';
import { useNavigate } from 'react-router';

const NewPost = () => {
  
  let navigate = useNavigate();
  const cookies = Cookie();
  const user_id = cookies.get('user_id');
  
  const [categories] = GetAll();
  const [categorias, setCategorias] = React.useState('');

  console.log('obtuve:',categories);
  const handleChange = (event) => {
    setCategorias(event.target.value);
  };
  const [createPost, setCreatePost] = useState(false);
  console.log(createPost);
  const [post, setPost] = useState({  // Inicializo estas variables de estado con valores vacíos 
      title: "",
      sinopsis: "",
      contenido: "",
      created_by: user_id,
      category_id: ""
  });
    
  const [formularioEnviado, cambiarFormularioEnviado] = useState (false);
    
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // console.log("jala");
    try {
      const obj = await Create(post);

      setCreatePost(obj);

      if (obj) {
        console.log("my object0:", obj);
      }
      // console.log("my object0:", user.id_rol);

    } catch (err) {
      console.log('error');
    }
  }
  const handleOnChangeInput = (event) => {
      const { name, value } = event.target; // Utilizo Destructuring, obtengo el name del input y el valor 
      setPost({
          ...post, // Esto es Destructuring, pone todos los atributos que estén contenidos en User, así sobreescribe la información con base en el name de mi input. 
          [name]: value
      }) // No tengo idea de por qué funciona si no hace referencia a los otros valores como email, password y photo
  }
  return (
    <>
      <Formik
          initialValues={{
                        title: '',
                        sinopsis: '',
                        categoria: '',
                        descripcion: '',
                        foto: ''
            }}
            validate={(valores) => {
              let errores={};
              //titulo
              if(!valores.title){
                errores.title = 'Porfavor ingresa un título'
              }else if(!/^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/.test(valores.title)){
                  errores.title = 'El título solo puede contener letras, numeros y espacios'
              }
              //sinopsis
              if(!valores.sinopsis){
                errores.sinopsis = 'Porfavor ingresa una sinopsis'
              }
               //descripcion
               if(!valores.descripcion){
                errores.descripcion = 'Porfavor ingresa una descripción'
               }
               //foto
               if(!valores.foto){
                errores.foto = 'Porfavor carga una imagen'
               }

               return errores;
            }}
            onSubmit={(valores, {resetForm}) =>{
                    resetForm();
                    alert('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                }}
        >
          {({errors}) => (
            <Form className="formulario">
              <h1>Crear nuevo post</h1>
                <div>
                  <label htmlFor="foto" >Cargar imagen</label>
                      <Field 
                        type="file" 
                        id="foto" 
                        name="foto" 
                        accept="image/*"
                        
                    />
                  <ErrorMessage name="name" component={() => (
                                <div className="error">{errors.name}</div>
                            )}/>
                  </div>
                  <div>
                      <Field 
                          type="text" 
                          id="title" 
                          name="title" 
                          placeholder="Título" 
                       />
                      <ErrorMessage name="title" component={() => (
                                <div className="error">{errors.title}</div>
                            )}/>
                  </div>
                  <div>
                      <Field 
                          type="text" 
                          id="sinopsis" 
                          name="sinopsis" 
                          placeholder="Sinopsis"
                        />
                      <ErrorMessage name="sinopsis" component={() => (
                                <div className="error">{errors.sinopsis}</div>
                            )}/>
                    </div>
                    <div>
                      <Field name="categoria" as="select">
                          <option value="Deportes">Deportes</option>
                          <option value="Accion">Accion</option>
                          <option value="Terror">Terror</option>                            
                          <option value="Baile">Baile</option>
                          <option value="Simulacion">Simulacion</option>
                        </Field>
                        <ErrorMessage name="categoria" component={() => (
                                <div className="error">{errors.categoria}</div>
                            )}/>
                    </div>
                    <div>
                      <Field name="descripcion" as="textarea" placeholder="Descripcion larga" lg/>
                      <ErrorMessage name="descripcion" component={() => (
                                <div className="error">{errors.descripcion}</div>
                            )}/>
                    </div>
                    <button type="submit"><ISave/>Guardar</button>
                    {formularioEnviado &&  <p className="exito">Formulario enviado con exito!</p>}

            </Form>
          )}
      </Formik>
    </>
  )
}
 
export default NewPost;