import React, {Component} from "react";
import Card from "../Cards";
import { Helmet } from "react-helmet";

import img1 from "../../img/Fortnite.jpg";
import img2 from "../../img/Valorant.jpg";
import img3 from "../../img/LOL.jpg";

class Reviews extends Component {


     render() {
          return (
               <>
                    <h1>Todas Reviews</h1>
                    <Helmet>
                         <title>Reviews</title>
                    </Helmet>
                    <Card/>
               </>
          );
     }
}

export default Reviews;