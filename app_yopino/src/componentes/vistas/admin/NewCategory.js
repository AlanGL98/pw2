import React, { useState } from "react";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { Formik, ErrorMessage } from 'formik';
import { Create } from '../../../servicios/Categorias';
import { useNavigate } from 'react-router';
import {ISave } from '../../../elementos/iconos/Iconos';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Components from '../../../elementos/logsign';

import '../../../css/comentarios.css';

const NewPost = () => {
  
  let navigate = useNavigate();
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  // const [categoria, setCategoria] = useState({  // Inicializo estas variables de estado con valores vacíos 
  //   name: ""
  // });
  const [nombre, setNombre] = useState('');

  const handleOnChange = (e) => { //Funcion para la escritura dentro de los inputs.
    //console.log(e.target.name);
    switch (e.target.name) {
      case 'nombre':
        setNombre(e.target.value);
        break;

      default:
        break;
    }
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const nuevaCategoria = {
      name: nombre,
      order: 99
    }

    const obj = await Create(nuevaCategoria);

    navigate('/admin-categorias');
  }
  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
        }}

        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = 'Porfavor ingresa un nombre'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre solo puede contener letras y espacios'
          }

          return errores;
        }}

        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log('Formulario enviado');
          cambiarFormularioEnviado(true);


        }}
      >
        {({ errors, handleBlur }) => (

          <Components.Form onSubmit={handleOnSubmit}>
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
              name='nombre'
              placeholder='Nombre'
              value={nombre}
              onChange={handleOnChange}
              onBlur={handleBlur} />

            <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre} </div>)} />
            <br></br>
            <Stack direction="row" alignItems="center" spacing={2}>



              <br></br><br></br>
              <Button type="submit" color="success" variant="outlined"><ISave/>Confirmar</Button>
              {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
              <br></br>
            </Stack>

          </Components.Form>

        )}
      </Formik>
    </>

  )
}

export default NewPost;