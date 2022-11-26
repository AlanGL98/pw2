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
// import { Link } from 'react-router-dom';

import '../../css/comentarios.css';

const NewPost = () => {

  const [categorias, setCategorias] = React.useState('');

  // const handleChange = (event) => {
  //   setCategorias(event.target.value);
  // };

const [formularioEnviado, cambiarFormularioEnviado] = useState (false);

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

    // <Components.Form>
    //   <Components.Title>Crea una publicación </Components.Title>
    //   <Components.Input type='text' placeholder='Titulo' />
    //   <Components.Input type='text' placeholder='Sinopsis' />

    //   {/* <Field name="category" as="select">
    //       <option value="Deportes">Deportes</option>
    //       <option value="Accion">Accion</option>
    //       <option value="Musicales">Musicales</option>
    //       <option value="Baile">Baile</option>
    //       <option value="Terror">Terror</option>
    //   </Field> */}
      
    //   <Box sx={{ minWidth: 200 }}>
    //                         <FormControl fullWidth>
    //                             <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
    //                             <Select
    //                             labelId="demo-simple-select-label"
    //                             id="demo-simple-select"
    //                             value={categorias}
    //                             label="Categoria"
    //                             onChange={handleChange}
    //                             >
    //                             <MenuItem value={1}>Deportes</MenuItem>
    //                             <MenuItem value={2}>Accion</MenuItem>
    //                             <MenuItem value={3}>Baile</MenuItem>
    //                             <MenuItem value={4}>Musica</MenuItem>
    //                             </Select>
    //                         </FormControl>
    //   </Box>
                                
    //   <Components.Input type='text' placeholder='Categoria' />

    //   <Stack direction="row" alignItems="center" spacing={2}>
    //     <Button color="success" variant="outlined" component="label">
    //       Cargar imagen
    //       <input hidden accept="image/*" multiple type="file" />
    //     </Button>
    //     <IconButton color="success" aria-label="upload picture" component="label">
    //       <input hidden accept="image/*" type="file" />
    //       <PhotoCamera />
    //     </IconButton>
    //     <Button color="success" variant="contained" size="medium">
    //       Publicar
    //     </Button>
    //   </Stack>
    // </Components.Form>
  )
}
 
export default NewPost;