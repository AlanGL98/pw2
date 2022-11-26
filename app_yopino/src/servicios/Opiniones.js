import { axiosBase as axios } from "./Config";
import {useState, useEffect} from "react";

const GetAll = () => {
    const [opiniones, setOpiniones] = useState([]);

    useEffect(() => {

        axios.get('/opiniones')
        .then((res) => {
            setOpiniones(res.data.data);
        });

    }, []);

    return [opiniones];
}

const GetPopulares = () => {
    const [opiniones, setOpiniones] = useState([]);

    useEffect(() => {

        axios.get('/opiniones/populares/')
        .then((res) => {
            setOpiniones(res.data.data);
        });

    }, []);

    return [opiniones];
}

const GetOne =  (id) => {
    const [opinion, setOpinion] = useState({});

    useEffect(() => {

        axios.get(`/opiniones/${id}`)
        .then((res) => {
            setOpinion(res.data.data);
        });

    }, []);

    useEffect(() => {
        if(opinion.category_id===undefined)
            return;

        axios.get(`/secciones/${opinion.category_id}`)
        .then((res) => {
            setOpinion({...opinion, name_cat: res.data.data.name});
        });

    }, [opinion]);

    return opinion;
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
        const response = await axios.put("/opiniones/:id", {
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
        const response = await axios.delete("/opiniones/:id", {
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
        const response = await axios.get(`/opiniones/get-image/${image}`)
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
        const response = await axios.post("/opiniones/add-image/:id", {
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

export {GetAll, GetOne, Delete, Create, Update,GetImage,AddImage,GetByCategory, GetPopulares};