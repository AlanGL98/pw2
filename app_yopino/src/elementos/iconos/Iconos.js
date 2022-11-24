import styled from "styled-components";
import theme from "../../theme";
import { ReactComponent as usuario } from "../../img/usuario.svg";
import { ReactComponent as cerrarSesion } from "../../img/log-out.svg";
import { ReactComponent as favorite } from "../../img/favorites.svg";
import { ReactComponent as edit } from "../../img/edit.svg";
import { ReactComponent as save } from "../../img/save.svg";
import { ReactComponent as category } from "../../img/category.svg";
import { ReactComponent as newpost } from "../../img/newpost.svg";
import { ReactComponent as borrar } from "../../img/delete.svg";


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

const ICategory = styled(category)`
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

const IDelete = styled(borrar)`
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

const IPost = styled(newpost)`
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
export {IUsuario, ICerrarSesion, IFavorite, IEdit, ISave, ICategory, IDelete, IPost};