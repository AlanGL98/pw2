import React from "react";
import styled from "styled-components";

import {ReactComponent as GamePad} from "./../img/gamepad2.svg";

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(27,51,6, 1);
    }
`;
 
const PuntosArriba = styled(GamePad)`
    
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
    path {
        fill: rgba(102,218,67, 1);
    }
`;
 
const PuntosAbajo = styled(GamePad)`
    
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
    path {
        fill: rgba(102,218,67, 1);
    }
`;

const Fondo = () => {
    return (
       <>
            <PuntosArriba />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                preserveAspectRatio="none">
                <path
                 fillOpacity="1" 
                 d="M0,32L40,42.7C80,53,160,75,240,69.3C320,64,400,32,480,32C560,
                 32,640,64,720,90.7C800,117,880,139,960,149.3C1040,160,1120,160,
                 1200,133.3C1280,107,1360,53,1400,26.7L1440,0L1440,320L1400,320C1360,
                 320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,
                 320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,
                 40,320L0,320Z">
                    </path>
            </Svg>
            <PuntosAbajo />
                   
       </> 
    );
}

export default Fondo;



