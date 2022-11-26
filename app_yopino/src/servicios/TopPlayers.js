import { axiosBase as axios } from "./Config";
import {useState, useEffect} from "react";

const GetAll = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {

        axios.get('/top-players')
        .then((res) => {
            setPlayers(res.data.data);
        });

    }, []);

    return [players];
}

const GetByOpinion = (id) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {

        axios.get(`/top-players/opinion/${id}`)
        .then((res) => {
            setPlayers(res.data.data);
        });

    }, []);

    return [players];
}

const GetOne =  (id) => {
    const [player, setPlayer] = useState({});

    useEffect(() => {

        axios.get(`/top-players/${id}`)
        .then((res) => {
            setPlayer(res.data.data);
        });

    }, []);

    return player;
}

const Create = async (opinion) => {

    try{
        let data = new FormData();
        data.set('title', opinion.title);
        data.set('sinopsis', opinion.sinopsis);
        data.set('contenido', opinion.contenido);
        data.set('category_id', opinion.category_id);
        data.set('created_by', opinion.created_by);

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/opiniones", {opinion});
        console.log("My response: ", response); //trae objeto creado
        return response;
    }catch(err){
        console.error(err);
        return err;
    }
}

const Update = async (id) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/top-players/:id", {
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
const Delete = async (id) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.delete("/top-players/:id", {
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
const GetImage = async (image) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/top-players/get-image/${image}`)
        if (response.status === 'success') {
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
const AddImage = async (image) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/top-players/add-image/:id", {
            image
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
const GetByCategory= async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/opiniones/seccion/:id", id)
        console.log(response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export {GetAll, GetOne, Delete, Create, Update,GetImage,AddImage,GetByCategory, GetByOpinion};