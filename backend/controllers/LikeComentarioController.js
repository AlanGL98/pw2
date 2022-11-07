'use strict'

var validator = require('validator');
var faker = require('faker');

class LikeComentarioService{
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
                name:name,
                like:'true',
                username:'localhost:3900/yopino/usuario',
                comentario:'localhost:3900/yopino/opiniones/comentario',
                createdAt
            });
        }
      }
}
var likes = new LikeComentarioService();
var controller = {

    get: (req, res) => {
        return res.status(200).send({
            status: 'success',
            LikesComentario: likes.list
        });
    },
    create: async (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_like = validator.isEmpty(params.like);

            if(validate_like ){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar2.'
                });
            }
            
            const newLikeComentario = {
                id: likes.list.length + 1,
                uuid: faker.datatype.uuid(),
                createdAt: faker.date.past(2),
                name:faker.name.findName(),
                like:'true',
                username:'localhost:3900/yopino/usuario',
                comentario:'localhost:3900/yopino/opiniones/comentario',
            }

            //Guardar el articulo en el arreglo
            likes.list.push(
                newLikeComentario
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                LikesComentario: newLikeComentario
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
            const bufferLike = likes.list.filter((like) => like.id == id);

            // Eliminar el registro
            const newArray = likes.list.filter((like) => like.id != id);
            likes.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                LikesComentario: bufferLike
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