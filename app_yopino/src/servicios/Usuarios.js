import { axiosBase as axios } from "./Config";

const GetAll = async () => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/usuarios")
        console.log("Todos los Usuarios", response);
    } catch (err) {
        console.error(err);
        return err;
    }
}

const GetOne = async (id) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/usuarios/${id}`)
        if (response.status == 'succes') {
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

const Create = async (id) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/usuarios/:id", {
            id
        })
        if (response.status == 'succes') {
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

const Update = async (id) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/usuarios/:id", {
            id
        })
        if (response.status == 'succes') {
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
        const response = await axios.delete("/usuarios/:id", {
            id
        })
        if (response.status == 'succes') {
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
        const response = await axios.get(`/usuarios/get-image/${image}`)
        if (response.status == 'success') {
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
        const response = await axios.post("/usuarios/add-image/:id", {
            image
        })
        if (response.status == 'succes') {
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
export {GetAll, GetOne, Delete, Update,GetImage,AddImage};