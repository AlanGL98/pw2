import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../../elementos/RankingElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestFunc from "../TestFunc";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputLabel } from "@mui/material";

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';

import '../../css/comentarios.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




  export default function Ranking () {
    const [ordenar, setOrdenar] = React.useState('');

    const handleChange = (event) => {
        setOrdenar(event.target.value);
    };

    const [comentarios] = useState(
        [
            {
                title:'Juego 1',
                img: require('../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 4,
            },
            {   
                title:'Juego 2',
                img: require('../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 3,
            },
            {
                title:'Juego 3',
                img: require('../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 4,
            },
            {
                title:'Juego 4',
                img: require('../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 3,
            }

        ]
    );

    const Categorias = [
        { title: 'Arcade'},
        { title: 'Accion'},
        { title: 'Aventura'},
        { title: 'Terror'},
        { title: 'Musicales'},
        { title: 'Deportes'},
        { title: 'Juegos de mesa'},
        { title: 'Estrategias'},
        { title: 'Simulacion'}
    
    ];
    
    // const Ordenar = [
    //     { title: 'M??s recientes'},
    //     { title: 'M??s antiguas'},
    //     { title: 'M??s populares'},
    //     { title: 'Menos populares'}
    
    // ];
    
 

   
        return (
            <>
                <Helmet>
                    <title>Yo Opino</title>
                </Helmet>
                <Header>
                    <ContenedorHeader>
                        <Titulo>Rankings</Titulo>
                        <ContenedorBotones>

                        <Autocomplete
                                multiple
                                limitTags={1}
                                id="size-small-multiple-limit-tags"
                                options={Categorias}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[Categorias[1]]}
                                renderInput={(params) => (
                                    <TextField {...params} label="Categorias" placeholder="Categoria" />
                                )}
                                sx={{ width: '300px' }}
                        />

                        <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ordenamiento</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ordenar}
                                label="Ordenamiento"
                                onChange={handleChange}
                                >
                                <MenuItem value={1}>M??s recientes</MenuItem>
                                <MenuItem value={2}>M??s antiguas</MenuItem>
                                <MenuItem value={3}>M??s populares</MenuItem>
                                <MenuItem value={4}>Menos populares</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        </ContenedorBotones>
                    </ContenedorHeader>
                </Header>
                <div className="cards1">
                            {
                                comentarios.map((card, i) => (
                                    <div key={i} className="card1">

                                        
                                        
                                        <h2>{card.title} <Checkbox {...label} icon={<FavoriteBorder color="success"/>} checkedIcon={<Favorite />} color="success"/></h2>
                                        <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={card.rate} size="small" readOnly align="right"/>
                                        </Stack>
                                        <br></br>

                                        <CardMedia className="RANKINGIMG" component="img"  align="left" sx={{ width: 400 }}  image={card.img}/>
                                        <h4>{card.content}</h4>
                                        
                                        <br></br><br></br>
                                        <a href='/post' className="btn-newcomment">Ver mas...</a>
                    
                                    </div>

                                ))
                            }

                </div>

                <TestFunc />
            </>
        )

}