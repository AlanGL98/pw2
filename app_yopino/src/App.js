import React from "react";
import { Helmet } from "react-helmet";
import HeaderDiv from  './componentes/HeaderDiv';
import Cargar from "./componentes/CarouselDiv";
import { Section } from "./elementos/Seccion";
import Navbar from "./componentes/NavBar";
import Reviews from "./componentes/vistas/Reviews";
//import Card from "./componentes/Card";
import Footer from './componentes/Footer'


const App = () => {
  return ( 
    <>

    
 
      {/* <Helmet>
        <title>YO OPINO</title>
      </Helmet>
      
      <HeaderDiv titulo="Inicio" /> */}

      <Section>
        <h1>Los más populares</h1>
        <Cargar>
          
        </Cargar>
      </Section>
      
      <Section>
        <Reviews />
      </Section>
      

    </>
   );
}
 
export default App;