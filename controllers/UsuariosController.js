'use strict'
const boom = require('@hapi/boom');
const Model = require('../models/UsuariosModel');
var validator = require('validator');
var faker = require('faker');

class UsuariosService {
    constructor() {
        //this.list = [];
        //this.generate();
    }

    async createUser(data) {
        const model = new Model(data);
        await model.save();
        return data;
    }
    async findOneUser(id) {
        const user = await Model.findOne({
            _id: id,
        });
        if (user == undefined || user == null)
            throw boom.notFound('No se encontro el usuario');
        else if (user.length <= 0)
            throw boom.notFound('No se encontro ningún registro');
        return user;
    }

    async updateUser(id, changes) {
        let user = await Model.findOne({
            _id: id,
        });
        let userOriginal = {
            name: user.name,
            last_name1: user.last_name1,
            last_name2: user.last_name2,
            username: user.username,
            email: user.email,
            password: user.password,
            birthdate: user.birthdate,
            image: user.image,
            id_rol: user.id_rol
        };
        const { name, last_name1,last_name2,username,email,password,birthdate,  image ,id_rol} = changes;
        user.name = name;
        user.last_name1 = last_name1;
        user.last_name2 = last_name2;
        user.username=username;
        user.email = email;
        user.password=password;
        user.birthdate= birthdate;
        user.image = image;
        user.id_rol=id_rol
        user.save();
    
        return {
            original: userOriginal,
            actualizado: user,
        };
    }

    async deleteUser(id) {
        let user = await Model.findOne({
            _id: id,
        });
        const { deletedCount } = await Model.deleteOne({
            _id: id,
        });
        if (deletedCount <= 0)
            throw boom.notFound('El registro seleccionado no existe');
        return user;
    }

    /*generate() {
        const limit = 20;
        for (let index = 0; index < limit; index++) {
            const createdAt = faker.date.past(2);
            const name = faker.name.findName();
            this.list.push({
                id: index + 1,
                uuid: faker.datatype.uuid(),
                name: name,
                username: faker.internet.userName(name),
                email: faker.internet.email(name),
                image: faker.internet.avatar(),
                createdAt,
            });
        }
    }*/
}

/*var users = new UsuariosService();

var controller = {

    getUsuarios: (req, res) => {
        return res.status(200).send({
            status: 'success',
            usuarios: users.list
        });
    },

    getUsuario: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;
        // Buscar el registro a eliminar
        const bufferUser = users.list.filter((user) => user.id == id);

        return res.status(200).send({
            status: 'success',
            usuario: bufferUser
        });
    },

    createUsuarios: (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_name = validator.isEmpty(params.name);
            var validate_username = validator.isEmpty(params.username);
            var validate_email = validator.isEmpty(params.email);

            if(validate_name && validate_username && validate_email){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar2.'
                });
            }
            
            const newUser = {
                id: users.list.length + 1,
                uuid: faker.datatype.uuid(),
                name: params.name,
                username: params.username,
                email: params.email,
                createdAt: faker.date.past(2),
                image: faker.internet.avatar(),
            }

            //Guardar el articulo en el arreglo
            users.list.push(
                newUser
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                usuario: newUser
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de agregado.'
            });
        }
    },

    updateUsuarios: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_name = validator.isEmpty(params.name);
            var validate_username = validator.isEmpty(params.username);
            var validate_email = validator.isEmpty(params.email);

            if(validate_name && validate_username && validate_email){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos de usuario por enviar.'
                });
            }

            // Buscar el registro a modificar
            const index = users.list.findIndex((item) => item.id == id);
            var bufferUser = users.list[index];
            users.list[index] = {
              ...bufferUser,
              ...params,
            };

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                usuario: users.list[index]
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de actualizacion.'
            });
        }
    },

    deleteUsuarios: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;

        // Validar datos
        try{

            // Buscar el registro a eliminar
            const bufferUser = users.list.filter((user) => user.id == id);

            // Eliminar el registro
            const newArray = users.list.filter((user) => user.id != id);
            users.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                usuario: bufferUser
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de actualizacion.'
            });
        }
    }

} // end controller

*/

//module.exports = controller;
module.exports= UsuariosService;