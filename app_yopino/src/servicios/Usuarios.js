import { axiosBase as axios } from "./Config";

const GetAll = async () => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/usuarios");
        const data = await response.data;
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
        const response = await axios.get(`/usuarios/${id}`)
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

const Register = async (user) => {

    try{
        let data = new FormData();
        data.set('name', user.name);
        data.set('last_name1', user.last_name1);
        data.set('last_name2', user.last_name2);
        data.set('username', user.username);
        data.set('email', user.email);
        data.set('password', user.password);
        data.set('birthdate', "1998-06-12");
        data.set('id_rol', user.id_rol);

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/usuarios", {user});
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
        const response = await axios.put("/usuarios/:id", {
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
        const response = await axios.delete("/usuarios/:id", {
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
        const response = await axios.get(`/usuarios/get-image/${image}`)
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
        const response = await axios.post("/usuarios/add-image/:id", {
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
const Login = async (data) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.post("/usuarios/login", data);
        console.log("obtuve: ", response);
    } catch (err) {
        console.error(err);
        return err;
    }
}
export {GetAll, GetOne, Delete, Register, Update,GetImage,AddImage,Login};