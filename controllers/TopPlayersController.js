'use strict'

var validator = require('validator');
var faker = require('faker');

class TopPlayersService{
    constructor() {
        this.list = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            const createdAt = faker.date.past(2);
            const name = faker.name.findName();
            this.list.push({
                id: index + 1,
                uuid: faker.datatype.uuid(),
                name:name,
                position:faker.datatype.number({
                    'min': 1,
                    'max': 10
                }),
                image: faker.internet.avatar(),
                url:'localhost:3900/yopino/opiniones/',
                createdAt
            });
        }
      }
}
var players = new TopPlayersService();
var controller = {

    getTopPlayers: (req, res) => {
        return res.status(200).send({
            status: 'success',
            jugadores: players.list
        });
    },
    createTopPlayers: async (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_name = validator.isEmpty(params.name);
            var validate_position = validator.isEmpty(params.position);

            if(validate_name && validate_position){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar2.'
                });
            }
            
            const newTopPlayer = {
                id: players.list.length + 1,
                uuid: faker.datatype.uuid(),
                name: params.name,
                position: params.position,
                url:'localhost:3900/yopino/opiniones/',
                createdAt: faker.date.past(2),
                image: faker.internet.avatar(),
            }

            //Guardar el articulo en el arreglo
            players.list.push(
                newTopPlayer
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                jugador: newTopPlayer
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de agregado.'
            });
        }
    },

    updateTopPlayers: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_name = validator.isEmpty(params.name);
            var validate_position = validator.isEmpty(params.position);

            if(validate_name &&validate_position){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos de jugador por enviar.'
                });
            }

            // Buscar el registro a modificar
            const index = players.list.findIndex((item) => item.id == id);
            var bufferUser = players.list[index];
            players.list[index] = {
              ...bufferUser,
              ...params,
            };

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                jugadores: players.list[index]
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de actualizacion.'
            });
        }
    },

    deleteTopPlayers: (req, res) => {
        // Recoger parametros de la url
        const  { id } = req.params;

        // Validar datos
        try{

            // Buscar el registro a eliminar
            const bufferPlayer = players.list.filter((player) => player.id == id);

            // Eliminar el registro
            const newArray = players.list.filter((player) => player.id != id);
            players.list = newArray;

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                jugadores: bufferPlayer
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de eliminacion.'
            });
        }
    }


}


module.exports = controller;