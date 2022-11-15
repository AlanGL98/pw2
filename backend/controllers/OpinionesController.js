'use strict'

var validator = require('validator');

const Model = require('../models/OpinionesModel');
const Categorias = require('../models/CategoriasModel');
const Usuarios = require('../models/UsuariosModel');

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
        const categorydb = await Categorias.findById(params.category_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const usuariodb = await Usuarios.findById(params.created_by);
        // Validar datos
        try{
            if (usuariodb && categorydb) {
                var validate_title = !validator.isEmpty(params.title);
                var validate_sinopsis = !validator.isEmpty(params.sinopsis);
                var validate_contenido = !validator.isEmpty(params.contenido);
            }
            else {
                res.send({ message: "El usuario y/o la categoria no existen." });
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if (validate_title && validate_sinopsis && validate_contenido) {
            // Crear el objeto a guardar
            var opinion = new Model();

            // Asignar valores
            opinion.title = params.title;
            opinion.sinopsis = params.sinopsis;
            opinion.contenido = params.contenido;
            opinion.category_id = categorydb;
            opinion.image = null;
            opinion.created_by = usuariodb;

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
        const categorydb = await Categorias.findById(params.category_id); // Esto me sirve para revisar si existe una rol con el id que recibo
        const usuariodb = await Usuarios.findById(params.created_by);
        // Validar datos
        try{
            if (usuariodb && categorydb) {
                var validate_title = !validator.isEmpty(params.title);
                var validate_sinopsis = !validator.isEmpty(params.sinopsis);
                var validate_contenido = !validator.isEmpty(params.contenido);
            }
            else {
                res.send({ message: "El usuario y/o la categoria no existen." });
            }
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falta datos por enviar.'
            });
        }

        if (validate_title && validate_sinopsis && validate_contenido) {
            // Find and update
            Model.findOneAndUpdate({ _id: opinionId }, params, {new:true}, (err, model) =>{
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
            var usuarioId = req.params.id;

            // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo.
            Model.findOneAndUpdate({_id: usuarioId}, {image: file_name}, {new: true}, (err, usuarioUpdated) => {

                if(err || !usuarioUpdated){
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del usuario.'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: usuarioUpdated
                });
            });
        }

    },

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/opiniones/' + file;

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