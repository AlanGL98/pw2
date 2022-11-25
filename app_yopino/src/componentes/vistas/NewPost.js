import React, { useState } from "react";

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
import Select from '@mui/material/Select';

import * as Components from '../../elementos/logsign';
// import { Link } from 'react-router-dom';

import '../../css/comentarios.css';

const NewPost = () => {

  const [categorias, setCategorias] = React.useState('');

  const handleChange = (event) => {
    setCategorias(event.target.value);
  };

  return (
    <Components.Form>
      <Components.Title>Crea una publicación </Components.Title>
      <Components.Input type='text' placeholder='Titulo' />
      <Components.Input type='text' placeholder='Sinopsis' />
      
      <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categorias}
                                label="Categoria"
                                onChange={handleChange}
                                >
                                <MenuItem value={1}>Deportes</MenuItem>
                                <MenuItem value={2}>Accion</MenuItem>
                                <MenuItem value={3}>Baile</MenuItem>
                                <MenuItem value={4}>Musica</MenuItem>
                                </Select>
                            </FormControl>
      </Box>
                                
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