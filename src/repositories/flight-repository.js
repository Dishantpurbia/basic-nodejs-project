const { Flight } = require(`../models`);
const  crudrespository  = require(`./crud-repository`);


class Flightrepository extends crudrespository {
    constructor(){
        super(Flight);
    }
};

module.exports = Flightrepository;