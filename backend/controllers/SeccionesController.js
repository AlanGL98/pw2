'use strict'

var validator = require('validator');
const Model = require('../models/CategoriasModel');

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
        var categoriaId = req.params.id;

        // Comprobar que existe
        if(!categoriaId || categoriaId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe la categoria.'
            });
        }

        // Buscar la categoria
        Model.findById(categoriaId, (err, model) =>{

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

    create: (req, res) =>{
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_name = !validator.isEmpty(params.name);
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if(validate_name){
            // Crear el objeto a guardar
            var categoria = new Model();

            // Asignar valores
            categoria.name = params.name;
            categoria.order = params.order;

            // Guardar la categoria
            categoria.save((err, model) => {

                if(err || !model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'La categoria no se ha guardado.'
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

    update:  (req, res) => {
        
        // Recoger el id de la categoria por la url
        var categoriaId = req.params.id;
        // Recoger los datos que llegan por put
        var params = req.body;
        // Validar datos
        try{
            var validate_name = !validator.isEmpty(params.name);
        }
        catch(err){
            return res.status(404).send({
                status: 'error',
                message: 'No existe la categoria1.'
            });
        }


        if(validate_name){
            // Find and update
            Model.findOneAndUpdate({_id: categoriaId}, params, {new:true}, (err, model) =>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar.'
                    });
                }

                if(!model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe la categoria2.'
                    });
                }

                return res.status(200).send({
                    status: 'succes',
                    article: model
                });

            });
        }
        else{
            // Devolver respuesta
            return res.status(200).send({
                status: 'error',
                message: 'No existe la categoria.'
            });
        }

    },

    delete: (req, res) => {
        // Recoger el id de la url
        var categoriaId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: categoriaId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado la categoria, posiblemente no existe.'
                });
            }
            
            return res.status(200).send({
                status: 'success',
                data: model
            });

        });

    },

}


module.exports = controller;