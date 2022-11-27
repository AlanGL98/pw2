import { axiosBase as axios } from "./Config";
import {useState, useEffect} from "react";

const GetAll = (user_id) => {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {

        axios.get(`favoritos/usuario/${user_id}`)
        .then((res) => {
            setFavoritos(res.data.data);
        });

       
    }, []);

    return [favoritos];
}

const GetOne = (id) => {
    const [favorito, setFavorito] = useState({});

    useEffect(() => {
        if (id !== undefined) {
            axios.get(`/favoritos/${id}`)
                .then((res) => {
                    setFavorito(res.data.data);
                });
        }
    }, []);
    console.log('obtuve;', favorito);
    return favorito;
}

const Create = async (fav) => {

    try{
        let data = new FormData();
        data.set('user_id', fav.user_id);
        data.set('opinion_id', fav.opinion_id);
        data.set('active', fav.active);

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/favoritos", fav);
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