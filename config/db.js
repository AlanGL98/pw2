const db = require('mongoose');
db.Promise = global.Promise;

const connect = async (url) => {
    await db.connect(url, {
    useNewUrlParser: true, //Compatibilidad de servidor
    });

    console.log('SE HA CONECTADO A LA BD');
};

module.exports = connect;
