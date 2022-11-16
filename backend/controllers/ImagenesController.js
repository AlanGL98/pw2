'use strict'

var validator = require('validator');
const Model = require('../models/ImagenModel');
const Opinion = require('../models/OpinionesModel');

//Dependencias para archivos
var fs = require('fs');
var path = require('path');

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

    get: (req, res) => {

        // Recoger id de la url
        var imageId = req.params.id;

        // Comprobar que existe
        if(!imageId || imageId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe la imagen.'
            });
        }

        // Buscar el usuario
        Model.findById(imageId, (err, model) =>{

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
        const opiniondb = await Opinion.findById(params.opinion_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        
        // Validar datos
        try{
            if (opiniondb) {
                // Crear el objeto a guardar
                var imagen = new Model();

                // Asignar valores

                imagen.image = null;
                imagen.opinion_id = opiniondb;

                // Guardar la imagen
                imagen.save((err, model) => {

                    if (err || !model) {
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
                res.send({message: "La opinion no existe."});
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

    },

    addImage: (req, res) => {
        // Configurar el modulo connect multiparty router/article.js

        // Recoger el fichero de la peticion
        var file_name = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        // Conseguir nombre y la extension del archivo
        // file0: debe ser el nombre de la variable que se manda en postman o insomnia 
        var file_path = req.files.file0.path; 
        var file_split = file_path.split('\\');

        // Nombre del archivo
        var file_name = file_split[2];

        // Extension del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extension, solo imagenes, si es valida, borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg'){
            // Borrar el archivo valido
            fs.unlink(file_path, (err) =>{
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida.'
                });
            });
        }
        else{
            // Si todo es valido
            var imagenesId = req.params.id;

            // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo.
            Model.findOneAndUpdate({_id: imagenesId}, {image: file_name}, {new: true}, (err, imagenUpdated) => {

                if(err || !imagenUpdated){
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del usuario.'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: imagenUpdated
                });
            });
        }

    },

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/imagenes/' + file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }
            else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe.'
                });
            }
        });
    },

}


module.exports = controller;