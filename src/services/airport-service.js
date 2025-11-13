const { Airportrespositry } = require(`../repositories`);
const { StatusCodes } = require(`http-status-codes`);
const apperror  = require(`../utils/errors/app-error`);

const airportrespository = new Airportrespositry();

async function createairport(data) {
    try {
        console.log("Creating airport with data:", data);
        const createdairport  = await airportrespository.create(data);
        return createdairport;
    }
     catch (error) {
        if(error.name ===`SequelizeValidationError` || error.name === `SequelizeUniqueConstraintError`){
            let explanation = [];
            error.errors.forEach((err)=> {
                explanation.push(err.message);
            })
            throw new apperror(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new apperror(`cannot create the airport`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function getairport(id) {
   try {
     const getairport = await airportrespository.get(id);
     return getairport;
   } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new apperror(`the airport you requested is not present in side the data`,error.statusCode);
        }
    throw new apperror(`cannot get airport you requested `,StatusCodes.INTERNAL_SERVER_ERROR);
   }
};

async function getairports() {
    try {
        const getairports = await airportrespository.getAll();
        return getairports;
    } catch (error) {
        throw new apperror(`cannot fetch al the airorts`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function destroyairport(id,data) {
    try {
        const deletedairport = await airportrespository.destroy(id,data);
        return deletedairport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new apperror(`the airport you requested to delete is not present in date`,error.statusCode);
        }
        throw new apperror(`cannot delete the airport`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function updateairport(id,data) {
    try {
        const updatedairport = await airportrespository.update(id,data);
        return updatedairport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new apperror(`the airport you requested to update is not present in side the data`,error.statusCode);
        }
        throw new apperror(`connot delete the airport`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createairport,
    destroyairport,
    getairport,
    getairports,
    updateairport
}