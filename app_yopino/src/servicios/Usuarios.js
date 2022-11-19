import { axiosBase as axios } from "./Config";

export const GetAll = async () => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get("/usuarios")
        console.log("Todos los Usuarios",response);
    }catch(err){
        console.error(err);
        return err;
    }
}

export const GetOne = async (id) => {
    try{
        //Respuesta de un await con la ruta del api
        const response = await axios.get(`/usuarios/${id}`)
        if(response.status==200) {
            return response.data;
          }else{
              return {}
          }
    }catch(err){
        console.error(err);
        return err;
    }
}