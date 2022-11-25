import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from '../../../elementos/RankingElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import TestFunc from "../../TestFunc";

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

import '../../../css/comentarios.css';
import Cookie from 'cookie-universal';
import { GetAll } from "../../../servicios/Favoritos";
import Global from '../../../Global';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




  export default function Favoritos () {
    const [ordenar, setOrdenar] = React.useState('');
    
    const cookies = Cookie();
    const user_id = cookies.get('user_id');

    
    const [favoritos] = GetAll();
    
    const handleChange = (event) => {
        setOrdenar(event.target.value);
    };

    const [comentarios] = useState(
        [
            {
                title:'Juego 1',
                img: require('../../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 4,
            },
            {   
                title:'Juego 2',
                img: require('../../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 3,
            },
            {
                title:'Juego 3',
                img: require('../../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 4,
            },
            {
                title:'Juego 4',
                img: require('../../../img/Valorant.jpg'),
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                rate: 3,
            }

        ]
    );


        return (
            <>
                <Helmet>
                    <title>Yo Opino</title>
                </Helmet>
                <Header>
                    <ContenedorHeader>
                        <Titulo>Mis favoritos</Titulo>
                    </ContenedorHeader>
                </Header>
                <div className="cards1">
                            {
                                favoritos.map((card, i) => (
                                    <div key={i} className="card1">
                                        
                                        <h2>{card.opinion_name} <Checkbox {...label} icon={<FavoriteBorder color="success"/>} checkedIcon={<Favorite />} color="success" checked={card.active}/></h2>
                                        <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={card.rate} size="small" readOnly align="right"/>
                                        </Stack>
                                        <br></br>

                                        <CardMedia className="RANKINGIMG" component="img"  align="left" sx={{ width: 400 }}  image={Global.url + 'opiniones/get-image/' + card.image}/>
                                        <h4>{card.opinion_sinopsis}</h4>
                                        
                                        <br></br><br></br>
                                        <a href={`/post/${card.opinion_id}`} className="btn-newcomment">Ver mas...</a>
                    
                                    </div>

                                ))
                            }

                </div>

            </>
        )

}
