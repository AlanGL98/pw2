import React from "react";
import { GetAll } from "../servicios/Usuarios";
// import axios from 'axios';
// import Global from "../Global";
function TestFunc() {

    const [users] = GetAll();

    return (
        <>
            {users.length === 0 ?
                <p>Cargando</p>
            :
                users.map((user) => {
                    return(<p>{user.name} - {user.email}</p>)
                })
            }
        </>
    );
}

export default TestFunc;