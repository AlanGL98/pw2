import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import IMG from '../../img/Fortnite.jpg';
import * as Components from '../../elementos/logsign';
import { Link } from 'react-router-dom';

import '../../css/comentarios.css';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
// import { height } from "@mui/system";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

import CardMedia from '@mui/material/CardMedia';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Post = () => {
    const [comentarios] = useState(
        [
            {
                user: 'Nombre de usuario 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                date: '29/10/22',
                rate: 4,
            },
            {
                user: 'Nombre de usuario 2',
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                date: '29/10/22',
                rate: 3,
            },
            {
                user: 'Nombre de usuario 3',
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                date: '29/10/22',
                rate: 4,
            },
            {
                user: 'Nombre de usuario 4',
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                date: '29/10/22',
                rate: 5,
            },
            {
                user: 'Nombre de usuario 5',
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                date: '29/10/22',
                rate: 4,
            },
            {
                user: 'Nombre de usuario 6',
                content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
                date: '29/10/22',
                rate: 1,
            },

        ]
    );

    const [TopPlayers] = useState(
        [
            {
                user: 'Player 1',
                img: require ('../../img/perfilDefault.png'),
            },
            {
                user: 'Player 1',
                img: require ('../../img/perfilDefault.png'),

            },
            {
                user: 'Player 1',
                img: require ('../../img/perfilDefault.png'),

            },
            {
                user: 'Player 1',
                img: require ('../../img/perfilDefault.png')
            },
            {
                user: 'Player 1',
                img: require ('../../img/perfilDefault.png')
            },
           

        ]
    );

    return (
        <div>
            <section>

                <div className="container">
                    <section className="postInfo">


                        <div className="gameinfo">
                            <h1>Nombre del juego</h1>
                            <p>Categoria</p>
                            <h6>'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.'</h6>
                            <Stack className="center" spacing={1} >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="large" readOnly />

                            </Stack>
                        </div>
                        <img src={IMG} alt="..."/>
                    </section>

                    <section className="postInfo">
                    <p>Lorem ipsum dolor sit amet. In sapiente dicta rem adipisci quaerat hic debitis odio nam vitae autem ab animi doloribus in voluptatem vero et sint dolor? Eum provident molestiae vel necessitatibus possimus sit magni veniam 33 libero natus. Et natus rerum in illum illo nam repudiandae vero aut eaque quam. Ex eius cumque eos corrupti animi et rerum enim est internos voluptas. Non repellendus corporis qui voluptas deserunt ut libero quisquam est nihil voluptatem. </p>
                    <p>Ea molestiae itaque At tempora eius id voluptate possimus non impedit esse et quibusdam quos ut cumque inventore. Eum delectus nisi qui nihil ipsum ut voluptas excepturi non magni quis et mollitia dolorem quo nihil alias in itaque dolorum! Qui nihil nihil 33 voluptatem libero hic internos voluptates. Vel dolorum aliquam est voluptates omnis ad velit perferendis. Quo asperiores inventore quo officiis esse ut voluptas autem et tempore voluptatibus aut rerum earum. Et eveniet recusandae sit corrupti beatae eum libero fugit in quia accusantium. Et deserunt amet a quibusdam repudiandae et odit optio ut debitis debitis et tempore animi qui voluptatem quia eos sint odit. </p>
                    <p>Est modi architecto et iusto consequatur aut animi nisi et amet dolorem vel enim dolores ab voluptas illo. 33 perspiciatis expedita ut corrupti aperiam 33 harum labore ut voluptas suscipit cum rerum minima qui voluptatem voluptatibus 33 natus consequatur? Sit sint ratione At delectus iusto hic omnis maxime. Ut libero sapiente ut omnis voluptas aut dicta doloribus aut porro dolor. Hic corporis magnam et maxime repudiandae et dolorem praesentium in cupiditate dignissimos est velit suscipit non magnam vero. </p>
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
                                            <Rating name="size-small" defaultValue={card.rate} size="small" readOnly />

                                        </Stack>
                                        <h4>{card.content}</h4>
                                        <h3>{card.user}</h3>


                                        <p>{card.date}</p>

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
                                TopPlayers.map((card, i) => (
                                    <div key={i} className="TPcard">
                                        <CardMedia className="TPIMG" component="img"  sx={{ width: 100 }}  image={card.img}/>
                                        <h2>{card.user}</h2>
                                    </div>

                                ))
                            }

                        </div>
                    </Grid>
                </Grid>
            </Box>

                   
                    <h1>Da tu opinion</h1>
                    <div className="new-comments">
                        {

                            <div className="new-comment-card">
                                <Stack spacing={1}>
                                    <Rating name="size-medium" defaultValue={1} />

                                </Stack>
                                <Components.Input type='text' placeholder='Da tu opinion' />
                                <h3>Usuario</h3>
                                <p>fecha</p>
                                <Link to={"/post"}><button className="btn-newcomment" type="submit">Publicar</button></Link>

                            </div>
                        }

                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Post;