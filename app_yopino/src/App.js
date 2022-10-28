import React from "react";
import { Helmet } from "react-helmet";
import HeaderDiv from  './componentes/HeaderDiv';
import Cargar from "./elementos/Carousel";
import { Section } from "./elementos/Seccion";
//import Card from "./componentes/Card";



const App = () => {
  return ( 
    <>
      <Helmet>
        <title>YO OPINO</title>
      </Helmet>
      
      <HeaderDiv titulo="Inicio" />
      
    
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