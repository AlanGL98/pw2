'use strict'

var validator = require('validator');
var faker = require('faker');

class OpinionesService{
    constructor() {
        this.list = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            const createdAt = faker.date.past(2);
            this.list.push({
                id: index + 1,
                uuid: faker.datatype.uuid(),
                title: faker.name.title(),
                image: faker.image.imageUrl(),
                description: faker.lorem.paragraphs(3),
                calification: faker.datatype.number({'min': 0, 'max': 100}),
                createdAt
            });
        }
      }
}
var opinions = new OpinionesService();

var controller = {

    getAll: (req, res) => {
        return res.status(200).send({
            status: 'success',
            opiniones: opinions.list
        });
    },

    get: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;
        // Buscar el registro a eliminar
        const bufferOpinion = opinions.list.filter((user) => user.id == id);

        return res.status(200).send({
            status: 'success',
            usuario: bufferOpinion
        });
    },

    create: (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_title = validator.isEmpty(params.title);
            var validate_description = validator.isEmpty(params.description);

            if(validate_title && validate_description){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan campos por llenar para la opinion.'
                });
            }
            
            const newOpinion = {
                id: opinions.list.length + 1,
                uuid: faker.datatype.uuid(),
                title: params.title,
                image: faker.internet.avatar(),
                description: params.description,
                calification: params.calification,
                createdAt: faker.date.past(2),
            }

            //Guardar el articulo en el arreglo
            opinions.list.push(
                newOpinion
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: newOpinion
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de agregado.'
            });
        }
    },

    update: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_title = validator.isEmpty(params.title);
            var validate_description = validator.isEmpty(params.description);

            if(validate_title && validate_description){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos de usuario por enviar.'
                });
            }

            // Buscar el registro a modificar
            const index = opinions.list.findIndex((item) => item.id == id);
            var bufferOpinion = opinions.list[index];
            opinions.list[index] = {
              ...bufferOpinion,
              ...params,
            };

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: opinions.list[index]
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de actualizacion.'
            });
        }
    },

    delete: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;

        // Validar datos
        try{

            // Buscar el registro a eliminar
            const bufferOpinion = opinions.list.filter((user) => user.id == id);

            // Eliminar el registro
            const newArray = opinions.list.filter((user) => user.id != id);
            opinions.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: bufferOpinion
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de actualizacion.'
            });
        }
    }

}


module.exports = controller;