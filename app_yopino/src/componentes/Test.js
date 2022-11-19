import React, {Component} from "react";
// import {GetAll} from '../servicios/Usuarios';
import axios from 'axios';
import Global from "../Global";

class Test extends Component {
    url = Global.url;
    state = {
        status: null,
        usuarios: []
    }

    componentDidMount(){
        this.test();
    }
    
    // Carga de informacion a mongo
    test = () => {
        axios.get(this.url + '/usuarios')
        .then(res => {

            this.setState({
                usuarios: res.data.data,
                status: 'success'
            });
        });
    }

    render() {
        if(this.state.status === null){
            return (
                <>
                    <p>Cargando...</p>
                </>
            )
        }

        if(this.state.status.length > 0 && this.state.status === 'success'){
            return (
                <>
                    {
                        this.state.usuarios.map((user) => {
                            return(<p key={user._id}>{user.name + ' - ' + user.email}</p>)
                        })
                    }
                </>
            )
        }
        else if(this.state.usuarios.length === 0 && this.state.status === 'success'){
            return (
                <>
                    <p>No hay contenido</p>
                </>
            )
        }
        
    }
}

export default Test;