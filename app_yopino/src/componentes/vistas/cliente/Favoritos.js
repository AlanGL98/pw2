import React from "react";
import { Helmet } from "react-helmet";
import {Header, Titulo, ContenedorHeader} from '../../../elementos/RankingElements';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    // const [ordenar, setOrdenar] = React.useState('');
    
    const cookies = Cookie();
    const user_id = cookies.get('user_id');

    
    const [favoritos] = GetAll(user_id);
    
    // const handleChange = (event) => {
    //     setOrdenar(event.target.value);
    // };

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
                                        
                                        <h2>{card.opinion_id.title} <Checkbox {...label} icon={<FavoriteBorder color="success"/>} checkedIcon={<Favorite />} color="success" checked={card.active}/></h2>
                                        <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={4} size="small" readOnly align="right"/>
                                        </Stack>
                                        <br></br>

                                        <CardMedia className="RANKINGIMG" component="img"  align="left" sx={{ width: 400 }}  image={Global.url + 'opiniones/get-image/' + card.image}/>
                                        <h4>{card.opinion_id.sinopsis}</h4>
                                        
                                        <br></br><br></br>
                                        <a href={`/post/${card.opinion_id._id}`} className="btn-newcomment">Ver mas...</a>
                    
                                    </div>

                                ))
                            }

                </div>

            </>
        )

}
