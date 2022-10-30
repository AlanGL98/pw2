'use strict'

/*var validator = require('validator');
var faker = require('faker');*/

const boom = require('@hapi/boom');// valida errores http
const Model = require('../models/RolesModel');

class RolesService{
    constructor() {
        /*this.roles = [];
        this.design=['Admin', 'Usuario Registrado','Critico']
        this.generate();*/
    }
    async createRol(data) {
        const model = new Model(data);
        await model.save();
        return data;
    }

    async findOneRol(id) {
        const rol = await Model.findOne({
            _id: id,
        });
        if (rol == undefined || rol == null)
            throw boom.notFound('No se encontro el rol de usuario');
        else if (rol.length <= 0)
            throw boom.notFound('No se encontro ningún registro');
        return rol;
    }
    /*generate() {
        
        for (let index = 0; index < 3; index++) {
            const createdAt = faker.date.past(2);
            this.roles.push({
                id: faker.datatype.uuid(),
                rol_name:this.design[index],
                createdAt
            });
        }
      }*/
}
/*var roles = new RolesService();
var controller = {

    getRoles: (req, res) => {
        return res.status(200).send({
            status: 'success',
            Rol: roles.roles
        });
    }

}*/


//module.exports = controller;
module.exports = RolesService;