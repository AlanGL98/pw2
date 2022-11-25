import { axiosBase as axios } from "./Config";
import {useState, useEffect} from "react";
// const GetAll = async () => {
//     try {
//         //Respuesta de un await con la ruta del api
//         const response = await axios.get("/secciones");
//         const data = await response.data.data;
//         // console.log(data);
//         return data;
//     } catch (err) {
//         console.error(err);
//         return err;
//     }
// }

const GetAll = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        axios.get('/secciones')
        .then((res) => {
            setCategorias(res.data.data);
        });

    }, []);

    return [categorias];
}

const GetOneCat =  (id) => {
    const [categoria, setCategoria] = useState({});

    useEffect(() => {
        if(id!=undefined){
        axios.get(`/secciones/${id}`)
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
        const response = await axios.post("/secciones", {seccion});
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
        const response = await axios.put("/secciones/:id", {
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
        const response = await axios.delete("/secciones/:id", {
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
        const response = await axios.get(`/secciones/get-image/${image}`)
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
        const response = await axios.post("/secciones/add-image/:id", {
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

export {GetAll, GetOneCat, Delete, Create, Update,GetImage,AddImage};