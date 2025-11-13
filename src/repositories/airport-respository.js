const {Airport} = require(`../models`);
const  crudrepository  = require(`./crud-repository`);

class airportrespository extends crudrepository {
    constructor(){
        super(Airport);
    }
}

module.exports = airportrespository;