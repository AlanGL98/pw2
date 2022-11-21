import { axiosBase as axios } from "./Config";

const GetAll = async () => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/opiniones");
        const data = await response.data.data;
        // console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
}

const GetOne = async (id) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/opiniones/${id}`)
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

export {GetAll, GetOne, Delete, Create, Update,GetImage,AddImage,GetByCategory};