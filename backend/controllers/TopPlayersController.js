'use strict'

var validator = require('validator');
const Model = require('../models/TopPlayersModel');

var controller = {

    getAll: (req, res) =>{

        var query = Model.find({});

        // Find
        query.find({}).sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver roles'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay roles para mostrar'
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
        var playersId = req.params.id;


        // Comprobar que existe
        if(!playersId || playersId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe la categoria.'
            });
        }

        // Buscar la categoria
        Model.findById(playersId, (err, model) =>{

            if(err || !model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe la categoria.'
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
        const opiniondb= await User.findById(body.opinion_id); // Esto me sirve para revisar si existe una opinion con el id que recibo
        
        // Validar datos
        try{
            if(opiniondb){
            var validate_name = !validator.isEmpty(params.name);
            var validate_order = !validator.isEmpty(params.order);
            }else{
                res.send({message: "La opinion no existe."});
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if(validate_name&&validate_order){
            // Crear el objeto a guardar
            var player = new Model();

            // Asignar valores
            
            player.name = params.name;
            player.order = params.order;
            player.image_path = params.image_path;


            // Guardar la player
            player.save((err, model) => {

                if(err || !model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El jugador no se ha guardado.'
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
        var playerId = req.params.id;
        // Recoger los datos que llegan por put
        var params = req.body;
        // Validar datos
        const opiniondb= await Model.findById(body.opinion_id);
        try{
            if(opiniondb){
                var validate_name = !validator.isEmpty(params.name);
                var validate_order = !validator.isEmpty(params.order);
                }else{
                    res.send({message: "La opinion no existe."});
                }
        }
        catch(err){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el jugador.'
            });
        }


        if(validate_name&&validate_order){
            // Find and update
            Model.findOneAndUpdate({_id: playerId}, params, {new:true}, (err, model) =>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar.'
                    });
                }

                if(!model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el jugador.'
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
                message: 'No existe el jugador.'
            });
        }

    },

    delete: (req, res) => {
        // Recoger el id de la url
        var playerId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: playerId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el jugador, posiblemente no existe.'
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