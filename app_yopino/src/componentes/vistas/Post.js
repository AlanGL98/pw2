import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import IMG from '../../img/Fortnite.jpg';
import * as Components from '../../elementos/logsign';
import { Link } from 'react-router-dom';




import '../../css/comentarios.css'
import { height } from "@mui/system";


const Post = () => {

    const [comentarios] = useState([
        {
            user:'Nombre de usuario 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/10/22',
            rate: 4,
        },
        {
            user:'Nombre de usuario 2' ,
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/10/22',
            rate: 3,
        },
        {
            user:'Nombre de usuario 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/10/22',
            rate: 4,
        },
        {
            user:'Nombre de usuario 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/10/22',
            rate: 5,
        },
        {
            user:'Nombre de usuario 5',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/10/22',
            rate: 4,
        },
        {
            user:'Nombre de usuario 6',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi hac, suspendisse purus ac nec egestas condimentum felis sed eros, vivamus cras arcu quam scelerisque eget mauris non. Dictumst libero class quam aptent tellus eu, pulvinar neque per dui condimentum, sapien tempor hendrerit metus cubilia.',
            date:'29/10/22',
            rate: 1,
        },

    ])
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
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="large" readOnly/>
                                
                          </Stack>
                    </div>   
                    <img src={IMG}  />    
            </section>

                <h1>Opiniones</h1>
                <div className="cards">
                    {
                        comentarios.map((card, i) => (
                        <div key= {i} className="card">
                           <Stack  spacing={1}>
                                <Rating name="size-small" defaultValue={card.rate} size="small" readOnly/>
                                
                            </Stack>
                            <h4>{card.content}</h4>
                            <h3>{card.user}</h3>
                          
                            
                            <p>{card.date}</p>
                            
                           </div>

                      ))
                     }
                                        
                    </div>

                    <h1>Da tu opinion</h1>
                    <div className="new-comments">
                    {
                       
                        <div  className="new-comment-card">
                           <Stack  spacing={1}>
                                <Rating name="size-medium" defaultValue={1}  />
                                
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