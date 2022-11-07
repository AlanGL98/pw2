'use strict'

var validator = require('validator');
var faker = require('faker');

class FavoritosService{
    constructor() {
        this.list = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            const createdAt = faker.date.past(2);
            this.list.push({
                id: index + 1,
                uuid: faker.datatype.uuid(),
                active:'true',
                id_user:'localhost:3900/yopino/usuario',
                id_opinion:'localhost:3900/yopino/opiniones',
                createdAt
            });
        }
      }
}
var favoritos = new FavoritosService();
var controller = {

    get: (req, res) => {
        return res.status(200).send({
            status: 'success',
            Favoritos: favoritos.list
        });
    },
    create: async (req, res) => {
        // Recoger parametros por post
        var params = req.body;

        // Validar datos
        try{
            var validate_active = validator.isEmpty(params.active);

            if(validate_active ){
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar2.'
                });
            }
            
            const newFavorito = {
                id: favoritos.list.length + 1,
                uuid: faker.datatype.uuid(),
                createdAt: faker.date.past(2),
                active:'true',
                id_user:'localhost:3900/yopino/usuario',
                id_opinion:'localhost:3900/yopino/opiniones',
                createdAt
            }

            //Guardar el articulo en el arreglo
            favoritos.list.push(
                newFavorito
            );

            // Devolver una respuesta
            return res.status(200).send({
                status: 'success',
                Favoritos: newFavorito
            });

        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Falla en proceso de agregado.'
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
    }


}


module.exports = controller;