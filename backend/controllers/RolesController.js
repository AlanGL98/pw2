'use strict'

const boom = require('@hapi/boom');// valida errores http
const Model = require('../models/RolesModel');

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
        var rolId = req.params.id;

        // Comprobar que existe
        if(!rolId || rolId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el rol.'
            });
        }

        // Buscar el rol
        Model.findById(rolId, (err, rol) =>{

            if(err || !rol){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el rol.'
                });
            }

            //Devolverlo en json
            return res.status(200).send({
                status: 'success',
                data: rol
            });

        });

    },

}

//module.exports = controller;
module.exports = controller;