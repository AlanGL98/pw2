import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import * as Components from '../../elementos/logsign';
import Moment from 'moment';

import '../../css/comentarios.css';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import { height } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import CardMedia from '@mui/material/CardMedia';
import Cookie from 'cookie-universal';
import { useParams } from "react-router-dom";
import { GetOne } from '../../servicios/Opiniones';
import Global from '../../Global';
import { GetComentariosByOpinion,RegisterCom } from "../../servicios/Comentarios";
import { GetByOpinion } from "../../servicios/TopPlayers";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Post = () => {
    //Datos de usuario
    const cookies = Cookie();
    const user_id = cookies.get('user_id');
    const rol_id = cookies.get('user_rol');
    const user = cookies.get('user')
    const now = Date.now();
    const dateNow= new Date(now);
    const hoy = dateNow.toDateString();

    //info de opinion
    const {id} = useParams();
    const opinion = GetOne(id);
    const [comentarios, setComentarios] = useState([]);
    const [topPlayers] = GetByOpinion(id);

    // useEffect(() => {
    //     console.log(topPlayers);
    // }, [topPlayers]);

    useEffect(() => {
        GetComentariosByOpinion(id, setComentarios);
    }, []);

    // useEffect(() => {
    //     GetUsuariosByComentario(setUsuarios);
    // }, []);
    const [createComment, setCreateComment] = useState(false);
    // console.log(createComment);
    const [comment, setComment] = useState({  // Inicializo estas variables de estado con valores vacíos 
        comment: "",
        user_id: user_id,
        opinion_id: id
    });
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        // console.log("jala");
        try {

            const obj = await RegisterCom(comment);

            setCreateComment(obj);

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
        setComment({
            ...comment, // Esto es Destructuring, pone todos los atributos que estén contenidos en User, así sobreescribe la información con base en el name de mi input. 
            [name]: value
        }) // No tengo idea de por qué funciona si no hace referencia a los otros valores como email, password y photo
    }
    // const [TopPlayers] = useState(
    //     [
    //         {
    //             user: 'Player 1',
    //             img: require ('../../img/perfilDefault.png'),
    //         },
    //         {
    //             user: 'Player 1',
    //             img: require ('../../img/perfilDefault.png'),

    //         },
    //         {
    //             user: 'Player 1',
    //             img: require ('../../img/perfilDefault.png'),

    //         },
    //         {
    //             user: 'Player 1',
    //             img: require ('../../img/perfilDefault.png')
    //         },
    //         {
    //             user: 'Player 1',
    //             img: require ('../../img/perfilDefault.png')
    //         },
           

    //     ]
    // );

    return (
        <div>
            <section>

                <div className="container">
                    <section className="postInfo">
                        <img src={Global.url + 'opiniones/get-image/' + opinion.image} alt="..."/>
                        <div className="gameinfo">
                            <h1>{opinion.title}</h1>
                            <h2>{opinion.name_cat}</h2>
                            <h3>{opinion.sinopsis}</h3>
                            <Stack className="center" spacing={1} >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="large" readOnly />

                            </Stack>
                        </div>
                    </section>

                    <section className="postInfo">
                    <p>{opinion.contenido}</p>
                    </section>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={8}>
                        <h1>Opiniones</h1>
                        <div className="cards1">
                            {
                                comentarios.map((card, i) => (
                                    <div key={i} className="card1">
                                        <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={5} size="small" readOnly />

                                        </Stack>
                                        <h4>{card.comment}</h4>
                                        <h3>{card.user_id.username}</h3>


                                        <p>{Moment(card.created_at).format('DD-MM-YYYY hh:mm')}</p>

                                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="success" />

                                    </div>
                                ))
                            }

                        </div>
                    </Grid>

                    <Grid xs={4}>
                    <h2>Top Players</h2>
                    <div className="TPcards">
                            {
                                topPlayers.map((card, i) => (
                                    <div key={i} className="TPcard">
                                        <CardMedia className="TPIMG" component="img"  sx={{ width: 100 }}  image={Global.url + 'opiniones/get-image/' + opinion.image}/>
                                        <h2>{card.name}</h2>
                                    </div>

                                ))
                            }

                        </div>
                    </Grid>
                </Grid>
            </Box>
            {
                rol_id === '63685e73ebc852362f53c40d' || rol_id === '63685c15ebc852362f53c40c' || rol_id ==='63685f0eebc852362f53c40f'?  
                    
                
                    <>
                        <h1>Da tu opinion</h1>
                        
                        <div className="new-comments">
                            {
                                
                                <div className="new-comment-card">

                                    <Stack spacing={1}>
                                        <Rating name="size-medium" defaultValue={1} />

                                    </Stack>
                                    <Components.Form onSubmit={handleOnSubmit}>
                                    <Components.Input type='text'name="comment" value={comment.comment} onChange={handleOnChangeInput} placeholder='Da tu opinion' />
                                    <h3>Usuario: {user.username}</h3>
                                    <p>{hoy}</p>
                                    <button className="btn-newcomment" type="submit">Publicar</button>

                                    </Components.Form>
                                </div>
                            }

                        </div>
                    </>
                    
                    : ""
                }
                </div>
            </section>
        </div>
    );
}
 
export default Post;