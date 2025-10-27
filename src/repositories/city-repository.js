const crudrespository = require(`./crud-repository`);
const { City } = require(`../models/`);


class cityrepository extends crudrespository {
    constructor(){
        super(City);
    }
}

module.exports = cityrepository;