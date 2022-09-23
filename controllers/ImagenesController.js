'use strict'

var validator = require('validator');
var faker = require('faker');

class ImagenesService{
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
                image:faker.image.imageUrl(),
                id_opinion:'localhost:3900/yopino/opiniones',
                createdAt
            });
        }
      }
}
var imagenes = new ImagenesService();
var controller = {

    get: (req, res) => {
        return res.status(200).send({
            status: 'success',
            Imagenes: imagenes.list
        });
    },
    create: async (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_image = validator.isEmpty(params.image);

            if(validate_image ){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar2.'
                });
            }
            
            const newImagen = {
                id: imagenes.list.length + 1,
                uuid: faker.datatype.uuid(),
                createdAt: faker.date.past(2),
                image:image.imageUrl(),
                id_opinion:'localhost:3900/yopino/opiniones',
            }

            //Guardar el articulo en el arreglo
            imagenes.list.push(
                newImagen
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                Imagenes: newImagen
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
            const bufferImagen = imagenes.list.filter((imagen) => imagen.id == id);

            // Eliminar el registro
            const newArray = imagenes.list.filter((imagen) => imagen.id != id);
            imagenes.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                Imagenes: bufferImagen
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