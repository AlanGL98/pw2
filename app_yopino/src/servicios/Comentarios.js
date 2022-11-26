import { axiosBase as axios } from "./Config";
import {useState, useEffect} from "react";

import Cookie from 'cookie-universal';

const GetComentariosByOpinion = (id, setComentarios) => {

    axios.get(`/comentarios/opiniones/${id}`)
    .then((res) => {
        setComentarios(res.data.data);
    });

}
const RegisterCom = async (comment) => {

    const cookies = Cookie();
    const user_id = cookies.get('user_id');
    
        let data = new FormData();
        data.set('comment', comment.comment);
        data.set('user_id', user_id);
        data.set('opinion_id', comment.opinion_id);

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/comentarios", comment);
        return response.data;
    
}
export {GetComentariosByOpinion,RegisterCom};