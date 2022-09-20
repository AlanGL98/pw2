'use strict'

var validator = require('validator');
var faker = require('faker');

class UsuariosService {
    constructor() {
        this.users = [];
        this.generate();
    }

    generate() {
        const limit = 20;
        for (let index = 0; index < limit; index++) {
            const createdAt = faker.date.past(2);
            const name = faker.name.findName();
            this.users.push({
                id: index + 1,
                uuid: faker.datatype.uuid(),
                name: name,
                username: faker.internet.userName(name),
                email: faker.internet.email(name),
                image: faker.internet.avatar(),
                createdAt,
            });
        }
    }
}

var users = new UsuariosService();

var controller = {

    getUsuarios: (req, res) => {
        return res.status(200).send({
            status: 'success',
            usuarios: users.users
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
            // const createdAt = faker.date.past(2);

            if(validate_name && validate_username && validate_email){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar2.'
                });
            }
            
            const newUser = {
                id: users.users.length + 1,
                uuid: faker.datatype.uuid(),
                name: params.name,
                username: params.username,
                email: params.email,
                createdAt: faker.date.past(2),
                image: faker.internet.avatar(),
            }

            //Guardar el articulo en el arreglo
            users.users.push(
                newUser
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                usuario: newUser,
                // usuarios: users.users
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar1.'
            });
        }
    },

} // end controller



module.exports = controller;