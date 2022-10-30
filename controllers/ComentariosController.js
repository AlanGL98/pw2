'use strict'

var validator = require('validator');
var faker = require('faker');

class ComentariosService{
    constructor() {
        this.list = [];
        this.generate();
    }

    generate() {
        const limitOpinions = 10, limitComments = 4;
        for (let i = 0; i < limitOpinions; i++) {
            for (let j = 0; j < limitComments; j++){
                this.list.push({
                    id: this.list.length + 1,
                    // comment: 'comentario ' + (this.list.length + 1),
                    comment: faker.lorem.sentence(5),
                    idOpinion: i + 1,
                    idUser: j + 1,
                });
            }
        }
      }
}
var comments = new ComentariosService();

var controller = {

    getAll: (req, res) => {
        return res.status(200).send({
            status: 'success',
            opiniones: comments.list
        });
    },

    get: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;
        // Buscar el registro a eliminar
        const bufferComment = comments.list.filter((user) => user.idOpinion == id);

        return res.status(200).send({
            status: 'success',
            usuario: bufferComment
        });
    },

    create: (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_comment = validator.isEmpty(params.comment);

            if(validate_comment){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan campos por llenar para la comentario.'
                });
            }

            const newComment = {
                id: comments.list.length + 1,
                comment: params.comment,
                idOpinion: params.idOpinion,
                idUser: params.idUser,
            }

            //Guardar el articulo en el arreglo
            comments.list.push(
                newComment
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: newComment
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

    update: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_comment = validator.isEmpty(params.comment);

            if(validate_comment){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos de usuario por enviar.'
                });
            }

            // Buscar el registro a modificar
            const index = comments.list.findIndex((item) => item.id == id);
            var bufferComment = comments.list[index];
            comments.list[index] = {
              ...bufferComment,
              ...params,
            };

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: comments.list[index]
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                error: err.message,
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
            const bufferComment = comments.list.filter((user) => user.id == id);

            // Eliminar el registro
            const newArray = comments.list.filter((user) => user.id != id);
            comments.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                opinion: bufferComment
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