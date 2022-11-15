'use strict'

var validator = require('validator');
const Model = require('../models/LikesModel');
const Usuarios = require('../models/UsuariosModel');
const Comentarios = require('../models/ComentariosModel');

var controller = {

    getAll: (req, res) =>{

        var query = Model.find({});

        // Find
        query.find({}).sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver likes'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay likes para mostrar'
                });
            }


            return res.status(200).send({
                status: 'success',
                data: model
            });

        });

    },
    create: async (req, res) =>{
        // Recoger parametros por post
        var params = req.body;
        const userdb = await Usuarios.findById(params.user_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const commentdb = await Comentarios.findById(params.comment_id);
        // Validar datos
        try {
            if (userdb && commentdb) {
                var like = new Model();

                // Asignar valores

                like.liked = params.liked;
                like.user_id = userdb;
                like.comment_id = commentdb;


                // Guardar el like
                like.save((err, model) => {

                    if (err || !model) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'tu like no se ha guardado.'
                        });
                    }

                    // Devolver una respuesta
                    return res.status(200).send({
                        status: 'success',
                        data: model
                    });
                });

            }
            else {
                res.send({ message: "El usuario y/o comentario no existe." });
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }
    
    },

    delete: (req, res) => {
        // Recoger el id de la url
        var likeId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: likeId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado tu like, posiblemente no existe.'
                });
            }
            
            return res.status(200).send({
                status: 'success',
                data: model
            });

        });

    }


}


module.exports = controller;