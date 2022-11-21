import styled from "styled-components";
import theme from "../../theme";
import { ReactComponent as usuario } from "../../img/usuario.svg";
import { ReactComponent as cerrarSesion } from "../../img/log-out.svg";
import { ReactComponent as favorite } from "../../img/favorites.svg";
import { ReactComponent as edit } from "../../img/edit.svg";
import { ReactComponent as save } from "../../img/save.svg";

const IUsuario = styled(usuario)`
   // width: 17px;
    margin-right: 5px;
    height: auto;
    color: ${(props) => props.primario ? theme.colorPrimario : theme.colorVerde};
    path {
        fill: ${(props) => props.primario 
                    ? theme.colorPrimario : 
                    theme.colorVerde};
    }
`;

const ICerrarSesion = styled(cerrarSesion)`
    //width: 17px;
    margin-right: 5px;
    height: auto;
    color: ${(props) => props.primario ? theme.colorPrimario : theme.colorVerde};
    path {
        fill: ${(props) => props.primario 
                    ? theme.colorPrimario : 
                    theme.colorVerde};
    }
`;

const IFavorite = styled(favorite)`
    //width: 17px;
    margin-right: 5px;
    height: auto;
    color: ${(props) => props.primario ? theme.colorPrimario : theme.colorVerde};
    path {
        fill: ${(props) => props.primario 
                    ? theme.colorPrimario : 
                    theme.colorVerde};
    }
`;

const IEdit = styled(edit)`
    //width: 17px;
    margin-right: 5px;
    height: auto;
    color: ${(props) => props.primario ? theme.colorPrimario : theme.colorVerde};
    path {
        fill: ${(props) => props.primario 
                    ? theme.colorPrimario : 
                    theme.colorVerde};
    }
`;

const ISave = styled(save)`
    width: 17px;
    margin-right: 15px;
    height: auto;
    color: ${(props) => props.primario ? theme.colorPrimario : theme.blanco};
    path {
        fill: ${(props) => props.primario 
                    ? theme.colorPrimario : 
                    theme.blanco};
    }
`;
export {IUsuario, ICerrarSesion, IFavorite, IEdit, ISave};