'use strict'

var validator = require('validator');
var faker = require('faker');

class OpinionesService{
    constructor() {
        this.opinions = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            const createdAt = faker.date.past(2);
            this.opinions.push({
                id: faker.datatype.uuid(),
                titulo:faker.name.title(),
                image:faker.image.imageUrl(),
                createdAt
            });
        }
      }
}
var opinions = new OpinionesService();
var controller = {

    getOpiniones: (req, res) => {
        return res.status(200).send({
            status: 'success',
            opiniones: opinions.opinions
        });
    }

}


module.exports = controller;