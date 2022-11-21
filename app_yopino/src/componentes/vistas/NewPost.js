import React from "react";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import * as Components from '../../elementos/logsign';
// import { Link } from 'react-router-dom';

import '../../css/comentarios.css';

const NewPost = () => {
  return (
    <Components.Form>
      <Components.Title>Crea una publicación </Components.Title>
      <Components.Input type='text' placeholder='Titulo' />
      <Components.Input type='text' placeholder='Sinopsis' />
      <Components.Input type='text' placeholder='Categoria' />

      <Stack direction="row" alignItems="center" spacing={2}>
        <Button color="success" variant="outlined" component="label">
          Cargar imagen
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton color="success" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <Button color="success" variant="contained" size="medium">
          Publicar
        </Button>
      </Stack>
    </Components.Form>
  )
}
 
export default NewPost;