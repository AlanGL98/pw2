import {useState, useEffect} from "react";
import { axiosBase as axios } from "./Config";

const GetAll = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get('/usuarios')
        .then((res) => {
            setUsers(res.data.data);
        });

    }, []);

    return [users];
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

const GetUsuariosByComentario = (setUsuarios) => {

    axios.get(`/usuarios`)
    .then((res) => {
        setUsuarios(res.data.data);
    });

}

const Register = async (user) => {

    // try{
        let data = new FormData();
        data.set('name', user.name);
        data.set('last_name1', user.last_name1);
        data.set('last_name2', user.last_name2);
        data.set('username', user.username);
        data.set('email', user.email);
        data.set('password', user.password);
        data.set('birthdate', "1998-06-12");
        data.set('id_rol', '63685f0eebc852362f53c40f');

        //Respuesta de un await con la ruta del api
        const response = await axios.post("/usuarios", user);
        // console.log("My response: ", response); //trae objeto creado
        return response.data;
    // }catch(err){
    //     console.error(err);
    //     return err;
    // }
}

const Update = async (id, user) => {
    try {
        //Respuesta de un await con la ruta del api
        const response = await axios.put("/usuarios/:id", id,user)
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
        return response.data;
    } catch (err) {
        console.error(err);
        return err;
    }
}
export {GetAll, GetOne, Delete, Register, Update,GetImage,AddImage,Login, GetUsuariosByComentario};