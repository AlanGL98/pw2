import React from 'react';
import Card from './Card';
import '../css/card-style.css';

import img2 from "../img/Valorant.jpg";
import img3 from "../img/LOL.jpg";
import { GetAll } from '../servicios/Opiniones';
import Global from '../Global';

const Cards = () => {
    
    const [opiniones] = GetAll();
    console.log('opiniones:', opiniones);
    return(
        <div className='contaier-fluid d-flex justify-content-center'>
            
            <div className='row'>
                {
                    opiniones.map((item) => {
                        return(
                        <div className='col-md-4' key={item._id}>
                            <Card 
                                opinion_sinopsis= {item.sinopsis}
                                imgsrc={Global.url + 'opiniones/get-image/' + item.image} 
                                title={item.title}
                                _id = {item._id} />
                        </div>
                        )
                    })
                }
                <div className='col-md-4'>
                    <Card imgsrc={img2} title='Valorant'/>
                </div>
                <div className='col-md-4'>
                    <Card imgsrc={img3} title='League of Legends'/>
                </div>      
                <div className='col-md-4'>
                    <Card imgsrc={img3} title='League of Legends'/>
                </div>   
            </div>
        </div>
    );
}
 
export default Cards;