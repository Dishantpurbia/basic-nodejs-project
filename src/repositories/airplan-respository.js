const crudrespository = require(`./crud-repository`);
const { Airplan } = require(`../models`);

class Airplanrespository extends crudrespository {
    constructor(){
        super(Airplan);
    }
}

module.exports = Airplanrespository;