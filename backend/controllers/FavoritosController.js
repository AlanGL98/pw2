'use strict'

var validator = require('validator');
const Model = require('../models/FavoritosModel');

var controller = {

    getAll: (req, res) =>{

        var query = Model.find({});

        // Find
        query.find({}).sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver favoritos'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay favoritos para mostrar'
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
        const userdb= await User.findById(body.user_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const opiniondb= await User.findById(body.opinion_id);
        // Validar datos
        try{
            if(userdb){
                if(opiniondb){
                    var validate_active = !validator.isEmpty(params.active);
                    
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

        if(validate_active){
            // Crear el objeto a guardar
            var favorito = new Model();

            // Asignar valores
            
            favorito.active = params.active;


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

        }
        else{
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar.'
            });
        }

    
    },
    delete: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;

        // Validar datos
        try{

            // Buscar el registro a eliminar
            const bufferFavorito = favoritos.list.filter((favorito) => favorito.id == id);

            // Eliminar el registro
            const newArray = favoritos.list.filter((favorito) => favorito.id != id);
            favoritos.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                Favoritos: bufferFavorito
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de eliminacion.'
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