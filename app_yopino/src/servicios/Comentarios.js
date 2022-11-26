import { axiosBase as axios } from "./Config";
import {useState, useEffect} from "react";

const GetComentariosByOpinion = (id, setComentarios) => {

    axios.get(`/comentarios/opiniones/${id}`)
    .then((res) => {
        setComentarios(res.data.data);
    });

}

export {GetComentariosByOpinion};