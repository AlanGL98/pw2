import styled from "styled-components";
import theme from "../theme";

const Header = styled.header`
    width: 100%;
`;

const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colorAzul}; 
    @media(max-width: 75rem){ /* 950px */
        flex-wrap: wrap;
    }
`;

const Titulo = styled.h1`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 10px 30px;
    @media(max-width:88rem){ /*950px */
        display: none;
    }
`;

const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    @media(max-width: 75rem){ /* 950px */
        width:100%;
        padding: 5px 0;
        justify-content: space-around;
    }
`;

export {Header, ContenedorHeader, Titulo, ContenedorBotones};