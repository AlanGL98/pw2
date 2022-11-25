// import { cardContentClasses, TableRow } from '@mui/material';
import React from 'react';
import Card from './Card';
import '../css/card-style.css';

import img1 from "../img/Fortnite.jpg";
import img2 from "../img/Valorant.jpg";
import img3 from "../img/LOL.jpg";

const Cards = () => {
    return(
        <div className='contaier-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                   <Card imgsrc={img1} title='Fortnite'/>
                </div>
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