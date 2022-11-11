'use strict'
const boom = require('@hapi/boom');// valida errores http
const Model = require('../models/UsuariosModel');
/*var validator = require('validator');
var faker = require('faker');*/


var controller = {

    getAll: (req, res) =>{

        var query = Model.find({});

        // Find
        query.find({}).sort('-_id').exec((err, model) =>{
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver usuarios'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay usuarios para mostrar'
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
                message: 'No existe el usuario.'
            });
        }

        // Buscar el usuario
        Model.findById(userId, (err, model) =>{

            if(err || !model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el usuario.'
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
        const roldb= await User.findById(body.id_rol); // Esto me sirve para revisar si existe una rol con el id que recibo
        
        // Validar datos
        try{
            if(roldb){
            var validate_name = !validator.isEmpty(params.name);
            var validate_last_name1 = !validator.isEmpty(params.last_name1);
            var validate_last_name2 = !validator.isEmpty(params.last_name2);
            var validate_username = !validator.isEmpty(params.username);
            var validate_email = !validator.isEmpty(params.email);
            var validate_password = !validator.isEmpty(params.password);
            }else{
                res.send({message: "El rol no existe."});
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if(validate_name&&validate_last_name1&&validate_last_name2&&validate_username&&validate_email&&validate_password){
            // Crear el objeto a guardar
            var user = new Model();

            // Asignar valores
            
            user.name = params.name;
            user.last_name1 = params.last_name1;
            user.last_name2 = params.last_name2;
            user.username = params.username;
            user.email = params.email;
            user.password = params.password;
            user.birthdate = params.birthdate;
            user.image = params.image;


            // Guardar el user
            user.save((err, model) => {

                if(err || !model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El usuario no se ha guardado.'
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
        var userId = req.params.id;
        // Recoger los datos que llegan por put
        var params = req.body;
        // Validar datos
        const roldb= await User.findById(body.rol_id);
        try{
            if(roldb){
                var validate_name = !validator.isEmpty(params.name);
                var validate_last_name1 = !validator.isEmpty(params.last_name1);
                var validate_last_name2 = !validator.isEmpty(params.last_name2);
                var validate_username = !validator.isEmpty(params.username);
                var validate_email = !validator.isEmpty(params.email);
                var validate_password = !validator.isEmpty(params.password);
                }else{
                    res.send({message: "La opinion no existe."});
                }
        }
        catch(err){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el usuario.'
            });
        }


        if(validate_name&&validate_last_name1&&validate_last_name2&&validate_username&&validate_email&&validate_password){
            // Find and update
            Model.findOneAndUpdate({_id: userId}, params, {new:true}, (err, model) =>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar.'
                    });
                }

                if(!model){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el usuario.'
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
        var userId = req.params.id;

        // Find and delete
        Model.findOneAndDelete({_id: userId}, (err, model) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if(!model){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el usuario, posiblemente no existe.'
                });
            }
            
            return res.status(200).send({
                status: 'success',
                data: model
            });

        });

    }

} // end controller

module.exports = controller;