import styled from "styled-components";
import theme from "../../theme";
import { ReactComponent as usuario } from "../../img/usuario.svg";
import { ReactComponent as cerrarSesion } from "../../img/log-out.svg";

const IUsuario = styled(usuario)`
    width: 17px;
    margin-right: 5px;
    height: auto;
    color: ${(props) => props.primario ? theme.colorPrimario : theme.blanco};
    path {
        fill: ${(props) => props.primario 
                    ? theme.colorPrimario : 
                    theme.blanco};
    }
`;

const ICerrarSesion = styled(cerrarSesion)`
    //width: 17px;
    //margin-right: 5px;
    height: auto;
    color: ${(props) => props.primario ? theme.colorPrimario : theme.blanco};
    path {
        fill: ${(props) => props.primario 
                    ? theme.colorPrimario : 
                    theme.blanco};
    }
`;

export {IUsuario, ICerrarSesion};