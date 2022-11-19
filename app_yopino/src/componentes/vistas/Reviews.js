import React, {Component} from "react";
import Card from "../Cards";
import { Helmet } from "react-helmet";

class Reviews extends Component {


     render() {
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
}

export default Reviews;