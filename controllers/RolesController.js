'use strict'

var validator = require('validator');
var faker = require('faker');

class RolesService{
    constructor() {
        this.roles = [];
        this.design=['Admin', 'Usuario Registrado','Critico']
        this.generate();
    }

    generate() {
        
        for (let index = 0; index < 3; index++) {
            const createdAt = faker.date.past(2);
            this.roles.push({
                id: faker.datatype.uuid(),
                rol_name:this.design[index],
                createdAt
            });
        }
      }
}
var roles = new RolesService();
var controller = {

    getRoles: (req, res) => {
        return res.status(200).send({
            status: 'success',
            Rol: roles.roles
        });
    }

}


module.exports = controller;