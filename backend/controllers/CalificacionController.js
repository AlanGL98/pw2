'use strict'

var validator = require('validator');
var faker = require('faker');

class CalificacionService{
    constructor() {
        this.list = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            const createdAt = faker.date.past(2);
            const name = faker.name.findName();
            this.list.push({
                id: index + 1,
                uuid: faker.datatype.uuid(),
                calificacion:faker.datatype.number({
                    'min': 1,
                    'max': 100
                })+'%',
                username:'localhost:3900/yopino/usuario',
                opinion:'localhost:3900/yopino/opiniones/',
                createdAt
            });
        }
      }
}
var calificacion = new CalificacionService();
var controller = {

    get: (req, res) => {
        return res.status(200).send({
            status: 'success',
            Calificacion: calificacion.list
        });
    },
    create: async (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_calificacion = validator.isEmpty(params.calificacion);

            if(validate_calificacion ){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar2.'
                });
            }
            
            const newCalificacionComentario = {
                id: calificacion.list.length + 1,
                uuid: faker.datatype.uuid(),
                createdAt: faker.date.past(2),
                calificacion:faker.datatype.number({
                    'min': 1,
                    'max': 100
                })+'%',
                username:'localhost:3900/yopino/usuario',
                opinion:'localhost:3900/yopino/opiniones/',
            }

            //Guardar el articulo en el arreglo
            calificacion.list.push(
                newCalificacionComentario
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                Calificacion: newCalificacionComentario
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
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
            const bufferCalif = calificacion.list.filter((calif) => calif.id == id);

            // Eliminar el registro
            const newArray = calificacion.list.filter((calif) => calif.id != id);
            calificacion.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                Calificacion: bufferCalif
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de eliminacion.'
            });
        }
    }


}


module.exports = controller;