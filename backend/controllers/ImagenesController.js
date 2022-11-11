'use strict'

var validator = require('validator');
const Model = require('../models/ImagenModel');

var controller = {

    getAll: (req, res) =>{

        var query = Model.find({});

        // Find
        query.find({}).sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver la imagen'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay imagen para mostrar'
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
        const opiniondb= await Model.findById(body.opinion_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        
        // Validar datos
        try{
            if(opiniondb){
                    var validate_image = !validator.isEmpty(params.image_path);
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

        if(validate_image){
            // Crear el objeto a guardar
            var imagen = new Model();

            // Asignar valores
            
            imagen.image_path = params.image_path;


            // Guardar la imagen
            imagen.save((err, model) => {

                if(err || !model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'tu imagen no se ha guardado.'
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
        // Recoger el id de la url
        var imagenId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: imagenId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado tu imagen, posiblemente no existe.'
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