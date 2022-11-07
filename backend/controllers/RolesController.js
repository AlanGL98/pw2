'use strict'

/*var validator = require('validator');
var faker = require('faker');*/

const boom = require('@hapi/boom');// valida errores http
const Model = require('../models/RolesModel');

class RolesService{
    constructor() {
        /*this.roles = [];
        this.design=['Admin', 'Usuario Registrado','Critico']
        this.generate();*/
    }
    async createRol(data) {
        const model = new Model(data);
        // await model.save();
        
        // Guardar el articulo
        await model.save((err, data) => {
            
            if(err || !data){
                return res.status(404).send({
                    status: 'error',
                    message: 'El articulo no se ha guardado.'
                });
            }
            
            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                article: data
            });
        })

        // return data;
    }

    async findOneRol(id) {
        const rol = await Model.findOne({
            _id: id,
        });
        if (rol == undefined || rol == null)
            throw boom.notFound('No se encontro el rol de usuario');
        else if (rol.length <= 0)
            throw boom.notFound('No se encontro ningún registro');
        return rol;
    }
    /*generate() {
        
        for (let index = 0; index < 3; index++) {
            const createdAt = faker.date.past(2);
            this.roles.push({
                id: faker.datatype.uuid(),
                rol_name:this.design[index],
                createdAt
            });
        }
      }*/
}
var roles = new RolesService();
var controller = {

    getRoles: (req, res) => {
        return res.status(200).send({
            status: 'success',
            Rol: roles.roles
        });
    },

    addRole: (req, res) =>{
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content= !validator.isEmpty(params.content);
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if(validate_title && validate_content){
            // Crear el objeto a guardar
            var article = new Article();

            // Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            // Guardar el articulo
            article.save((err, data) => {

                if(err || !data){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado.'
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: data
                });
            })

        }
        else{
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar.'
            });
        }
    
    }

}


//module.exports = controller;
module.exports = controller;