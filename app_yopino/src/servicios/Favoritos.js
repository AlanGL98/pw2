import { axiosBase as axios } from "./Config";
import {useState, useEffect} from "react";

const GetAll = (user_id) => {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {

        axios.get(`favoritos/usuario/${user_id}`)
        .then((res) => {
            setFavoritos(res);
        });

       
    }, []);
    useEffect(() => {
        if(favoritos.opinion_id===undefined)
            return;

            axios.get(`/opiniones/${favoritos.opinion_id}`)
            .then((res) => {
                setFavoritos({...favoritos,opinion_name:res.title,opinion_sinopsis:res.sinopsis,image:res.image});
            });

    }, [favoritos]);

    return [favoritos];
}

const GetOne =  (id) => {
    const [categoria, setCategoria] = useState({});

    useEffect(() => {
        if(id!=undefined){
        axios.get(`/favoritos/${id}`)
        .then((res) => {
            setCategoria(res.data.data);
        });
        }
    }, []);
    console.log('obtuve;',categoria);
    return categoria;
}

const Create = async (seccion) => {

    try{
        let data = new FormData();
        data.set('name', seccion.name);
        data.set('order', seccion.order);

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/favoritos", seccion);
        console.log("My response: ", response); //trae objeto creado
        return response;
    }catch(err){
        console.error(err);
        return err;
    }
}


const Delete = async (id) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/favoritos/:id", {
            id
        })
        if (response.status === 'succes') {
            return response.data;
        } 
        else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err;
    }
}


export {GetAll, GetOne, Delete, Create};