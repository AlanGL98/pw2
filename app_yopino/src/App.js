import React from "react";
import { Helmet } from "react-helmet";
import HeaderDiv from  './componentes/HeaderDiv';

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <HeaderDiv titulo="Home" />

    </>
   );
}
 
export default App;