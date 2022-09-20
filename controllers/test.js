'use strict'

var validator = require('validator');
var Article = require('../models/test');

var controller = {

    datosCurso : (req, res) => {
        //console.log('Hola mundo');
        var test = req.body.test;
    
        return res.status(200).send({
            curso: 'Master en frameworks JS',
            autor: 'Alan Gonzalez Leos',
            url: 'alangonzalez.com',
            test
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Prueba del controlador de articulos'
        });
    },

    // save: (req, res) =>{
    //     // Recoger parametros por post
    //     var params = req.body;

    //     // Validar datos
    //     try{
    //         var validate_title = !validator.isEmpty(params.title);
    //         var validate_content= !validator.isEmpty(params.content);
    //     }
    //     catch(err){
    //         return res.status(200).send({
    //             status: 'error',
    //             message: 'Falta datos por enviar.'
    //         });
    //     }

    //     if(validate_title && validate_content){
    //         // Crear el objeto a guardar
    //         var article = new Article();

    //         // Asignar valores
    //         article.title = params.title;
    //         article.content = params.content;
    //         article.image = null;

    //         // Guardar el articulo
    //         article.save((err, articleStored) => {

    //             if(err || !articleStored){
    //                 return res.status(404).send({
    //                     status: 'error',
    //                     message: 'El articulo no se hja guardado.'
    //                 });
    //             }

    //             // Devolver una respuesta
    //             return res.status(200).send({
    //                 status: 'success',
    //                 article: articleStored
    //             });
    //         })

    //     }
    //     else{
    //         return res.status(200).send({
    //             status: 'error',
    //             message: 'Faltan datos por enviar.'
    //         });
    //     }

    
    // },

} // end controller

module.exports = controller;