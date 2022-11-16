'use strict'

var validator = require('validator');
const Model = require('../models/CalificacionesModel');
const Opiniones = require('../models/OpinionesModel');

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

    create: async (req, res) =>{
        // Recoger parametros por post
        var params = req.body;
        const opiniondb = await Opiniones.findById(params.opinion_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        // Validar datos
        try{
            if(opiniondb){
                // Crear el objeto a guardar
                var calificacion = new Model();
    
                // Asignar valores
                calificacion.valoraciones = params.valoraciones;
                calificacion.promedio = params.promedio;
                calificacion.estrellas = params.estrellas;
                calificacion.opinion_id = opiniondb;
    
                // Guardar la calificacion
                calificacion.save((err, model) => {
    
                    if(err || !model){
                        return res.status(404).send({
                            status: 'error',
                            message: 'tu calificacion no se ha guardado.'
                        });
                    }
    
                    // Devolver una respuesta
                    return res.status(200).send({
                        status: 'success',
                        data: model
                    });
                });
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