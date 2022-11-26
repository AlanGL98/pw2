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
  const handleOnSubmit = async (event) => {
      event.preventDefault();
      // console.log("jala");
      try {

          const obj = await Create(post);

          setCreatePost(obj);

          if(obj){
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
    <Components.Form onChange={handleOnSubmit}>
    
      <Components.Title>Crea una publicación </Components.Title>
      <Components.Input type='text'name='title' id = 'title' value={post.title} onChange={handleOnChangeInput} placeholder='Titulo' />
      <Components.Input type='text' name='sinopsis' id = 'sinopsis' value={post.sinopsis} onChange={handleOnChangeInput}placeholder='Sinopsis' />
      
      <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="category_id"
                                value={post.category_id}
                                label="Categoria"
                                onChange={handleOnChangeInput}
                                >
                                  
                                {
                                  categories.map((item,i) => {
                                    return (

                                  <MenuItem value={item._id}>{item.name}</MenuItem>
                                                      )
                                  })
                                }
                                </Select>
                            </FormControl>
      </Box>
                                
      <Components.Input type='text'name='contenido' id = 'contenido' value={post.contenido} onChange={handleOnChangeInput} placeholder='Contenido' />

      <Stack direction="row" alignItems="center" spacing={2}>
        <Button color="success" variant="outlined" component="label">
          Cargar imagen
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton color="success" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <Button type='submit' href="/" color="success" variant="contained" size="medium">
          Publicar
        </Button>
      </Stack>
    </Components.Form>
  )
}
 
export default NewPost;