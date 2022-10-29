import React from "react";
import { Helmet } from "react-helmet";
import HeaderDiv from  './componentes/HeaderDiv';
import Cargar from "./componentes/CarouselDiv";
import { Section } from "./elementos/Seccion";
import Navbar from "./componentes/NavBar";
//import Card from "./componentes/Card";



const App = () => {
  return ( 
    <>

    
 
      {/* <Helmet>
        <title>YO OPINO</title>
      </Helmet>
      
      <HeaderDiv titulo="Inicio" /> */}
      
    
      <Cargar>
        Slide
      </Cargar>
      

      <Section>
        Categorias   
      </Section>
    </>
   );
}
 
export default App;