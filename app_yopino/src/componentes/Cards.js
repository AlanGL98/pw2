import { cardContentClasses, TableRow } from '@mui/material';
import React, {Component } from 'react';
import Card from './Card';
import './card-style.css';

import img1 from "../img/Fortnite.jpg";
import img2 from "../img/Valorant.jpg";
import img3 from "../img/LOL.jpg";

class Cards extends Component{
    render(){
        return(
            <div className='contaier-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                       <Card imgsrc={img1}/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img2}/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img3}/>
                    </div>       
                </div>
            </div>
        );
    }
}

export default Cards;