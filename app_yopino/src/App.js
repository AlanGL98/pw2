import React from "react";
import Cargar from "./componentes/CarouselDiv";
import { Section } from "./elementos/Seccion";
import Reviews from "./componentes/vistas/Reviews";


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