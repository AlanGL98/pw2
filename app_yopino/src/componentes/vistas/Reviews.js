import React from "react";
import Card from "../Cards";
import '../card-style.css'
import { Helmet } from "react-helmet";


const Reviews = () => {
    return ( 
        <>
          <h1>Reviews</h1>
        <Helmet>
             <title>Reviews</title>
        </Helmet>
        <Card />

        </>
     );
}

export default Reviews;