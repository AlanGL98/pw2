'use strict'

var validator = require('validator');
var faker = require('faker');

class SeccionesService{
    constructor() {
        this.list = [];
        this.generate();
    }

    generate() {
        const limit = 3;
        for (let i = 0; i < limit; i++) {
            this.list.push({
                id: this.list.length + 1,
                // name: 'comentario ' + (this.list.length + 1),
                name: faker.lorem.sentence(2)
            });
        }
      }
}
var sections = new SeccionesService();

var controller = {

    getAll: (req, res) => {
        return res.status(200).send({
            status: 'success',
            opiniones: sections.list
        });
    },

    create: (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_name = validator.isEmpty(params.name);

            if(validate_name){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan campos por llenar para la comentario.'
                });
            }

            const newSection = {
                id: sections.list.length + 1,
                name: params.name
            }

            //Guardar el articulo en el arreglo
            sections.list.push(
                newSection
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: newSection
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                error: err.message,
                message: 'Falla en proceso de agregado.'
            });
        }
    },

    delete: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;

        // Validar datos
        try{

            // Buscar el registro a eliminar
            const buffername = sections.list.filter((user) => user.id == id);

            // Eliminar el registro
            const newArray = sections.list.filter((user) => user.id != id);
            sections.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: buffername
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                error: err.message,
                message: 'Falla en proceso de actualizacion.'
            });
        }
    }

}


module.exports = controller;