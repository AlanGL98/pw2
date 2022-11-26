'use strict'

var validator = require('validator');
const Model = require('../models/FavoritosModel');
const Opiniones = require('../models/OpinionesModel');
const Usuarios = require('../models/UsuariosModel');

var controller = {

    getAll: (req, res) =>{

        // Recoger id de la url
        var userId = req.params.id;

        // Buscar el usuario
        Model
        .find({user_id:userId})
        .populate('opinion_id')
        .sort('-_id').exec((err, model) =>{

            if(err || !model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existen favoritos.'
                });
            }

            //Devolverlo en json
            return res.status(200).send({
                status: 'success',
                data: model
            });

        });

    },

    get: (req, res) => {

        // Recoger id de la url
        var userId = req.params.id;


        // Comprobar que existe
        if(!userId || userId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el favorito.'
            });
        }

        // Buscar el usuario
        Model.findById(userId, (err, model) =>{

            if(err || !model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el favorito.'
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
        const userdb= await Usuarios.findById(params.user_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const opiniondb= await Opiniones.findById(params.opinion_id);
        // Validar datos
        try{
            if(userdb){
                if(opiniondb){
                    var favorito = new Model();

            // Asignar valores
            
            favorito.active = params.active;
            favorito.user_id=userdb;
            favorito.opinion_id=opiniondb;


            // Guardar el favorito
            favorito.save((err, model) => {

                if(err || !model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'tu favorito no se ha guardado.'
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    data: model
                });
            })
                }else{
                res.send({message: "La opinion no existe."});
                }
            }else{
                res.send({message: "El usuario no existe."});
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
        var favoritoId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: favoritoId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado tu favorito, posiblemente no existe.'
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