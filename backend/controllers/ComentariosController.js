'use strict'

var validator = require('validator');
const Model = require('../models/ComentariosModel');
const Opiniones = require('../models/OpinionesModel');
const Usuarios = require('../models/UsuariosModel');

var controller = {

    getAll: (req, res) =>{

        var query = Model.find({});

        // Find
        query.find({}).sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los comentarios'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay comentarios para mostrar'
                });
            }


            return res.status(200).send({
                status: 'success',
                data: model
            });

        });

    },

    get: (req, res) => {

        // Recoger id de la url
        var comentarioId = req.params.id;


        // Comprobar que existe
        if(!comentarioId || comentarioId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el comentario.'
            });
        }

        // Buscar el usuario
        Model.findById(comentarioId, (err, model) =>{

            if(err || !model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el comentario.'
                });
            }

            //Devolverlo en json
            return res.status(200).send({
                status: 'success',
                data: model
            });

        });

    },

    getByOpinion: (req, res) => {

        // Recoger id de la url
        var opinionId = req.params.id;

        // Comprobar que existe
        if(!opinionId || opinionId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el comentario.'
            });
        }

        var query = Model.find({ });

        // Find
        query
        .find({opinion_id: opinionId})
        .populate('user_id', {username: 1}) //Obtiene los atributos del usuario
        .sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los comentarios'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay comentarios para mostrar'
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
        const opiniondb = await Opiniones.findById(params.opinion_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const usuariodb = await Usuarios.findById(params.user_id);
        // Validar datos
        try{
            if (usuariodb && opiniondb) {
                var validate_comment = !validator.isEmpty(params.comment);
            }
            else {
                res.send({ message: "El usuario y/o la opinion no existen." });
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if(validate_comment){
            // Crear el objeto a guardar
            var comentario = new Model();

            // Asignar valores
            comentario.comment = params.comment;
            comentario.opinion_id = opiniondb;
            comentario.user_id = usuariodb;

            // Guardar la comentario
            comentario.save((err, model) => {

                if(err || !model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'tu comentario no se ha guardado.'
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    data: model
                });
            })

        }
        else{
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar.'
            });
        }

    
    },

    update: async (req, res) => {
        
        // Recoger el id de la categoria por la url
        var commentId = req.params.id;
        // Recoger los datos que llegan por put
        var params = req.body;
        // Validar datos
        const opiniondb = await Opiniones.findById(params.opinion_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const usuariodb = await Usuarios.findById(params.user_id);
        // Validar datos
        try{
            if (usuariodb && opiniondb) {
                var validate_comment = !validator.isEmpty(params.comment);
            }
            else {
                res.send({ message: "El usuario y/o la opinion no existen." });
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if(validate_comment){// Find and update
            Model.findOneAndUpdate({_id: commentId}, params, {new:true}, (err, model) =>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar.'
                    });
                }

                if(!model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el comentario.'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: model
                });

            });
        }
        else{
            // Devolver respuesta
            return res.status(200).send({
                status: 'error',
                message: 'No existe el usuario.'
            });
        }

    },

    delete: (req, res) => {
        // Recoger el id de la url
        var commentarioId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: commentarioId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado tu comentario, posiblemente no existe.'
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