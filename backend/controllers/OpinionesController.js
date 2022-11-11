'use strict'

var validator = require('validator');

const Model = require('../models/OpinionesModel');

var controller = {

    getAll: (req, res) =>{

        var query = Model.find({});

        // Find
        query.find({}).sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver las opiniones'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay las opiniones para mostrar'
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
        var opinionId = req.params.id;


        // Comprobar que existe
        if(!opinionId || opinionId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe la opinion.'
            });
        }

        // Buscar el usuario
        Model.findById(opinionId, (err, model) =>{

            if(err || !model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe la opinion.'
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
        const categorydb= await Model.findById(body.category_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const usuariodb= await Model.findById(body.created_by);
        // Validar datos
        try{
            if(usuariodb){
                if(categorydb){
                    var validate_title = !validator.isEmpty(params.title);
                    var validate_sinopsis = !validator.isEmpty(params.sinopsis);
                    var validate_contenido = !validator.isEmpty(params.contenido);
                    var validate_autor = !validator.isEmpty(params.created_by);
                    
                }else{
                res.send({message: "La categoria no existe."});
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

        if(validate_title&&validate_sinopsis&&validate_contenido&&validate_autor){
            // Crear el objeto a guardar
            var opinion = new Model();

            // Asignar valores
            
            opinion.title = params.title;
            opinion.sinopsis = params.sinopsis;
            opinion.contenido = params.contenido;
            opinion.autor = params.autor;
            opinion.image = params.image;


            // Guardar la opinion
            opinion.save((err, model) => {

                if(err || !model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'tu opinion no se ha guardado.'
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
        var opinionId = req.params.id;
        // Recoger los datos que llegan por put
        var params = req.body;
        // Validar datos
        const categorydb= await Model.findById(body.category_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const usuariodb= await Model.findById(body.created_by);
        // Validar datos
        try{
            if(usuariodb){
                if(categorydb){
                    var validate_title = !validator.isEmpty(params.title);
                    var validate_sinopsis = !validator.isEmpty(params.sinopsis);
                    var validate_contenido = !validator.isEmpty(params.contenido);
                    var validate_autor = !validator.isEmpty(params.created_by);
                    
                }else{
                res.send({message: "La categoria no existe."});
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

        if(validate_title&&validate_sinopsis&&validate_contenido&&validate_autor){
            // Find and update
            Model.findOneAndUpdate({_id: opinionId}, params, {new:true}, (err, model) =>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar.'
                    });
                }

                if(!model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe la opinion.'
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
        var opinionId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: opinionId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado tu opinion, posiblemente no existe.'
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