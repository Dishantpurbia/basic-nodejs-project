const { StatusCodes }  = require(`http-status-codes`);

const {Airplanrespository} = require(`../repositories`);
const apperror = require(`../utils/errors/app-error`);

const airplanrespository = new Airplanrespository();

async function createAirplan(data){
    try {
        const airplan = await airplanrespository.create(data);
        return airplan;
    
    } catch (error) {

        if( error.name === `SequelizeValidationError`){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new apperror(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new apperror(`cannot create a new airplan object`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getairplanes() {
    try {
        const airplanes = await airplanrespository.getAll();
        return airplanes;
    } catch (error) {
        throw new apperror(`cannot fetch data of all the airplan`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getairplane(id) {
    try {
        const airplanes = await airplanrespository.get(id);
        return airplanes;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new apperror(`the airplane you requested is not present`,error.StatusCodes);
        }
        throw new apperror(`cannot fetch data of the airplan`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteairplane(id) {
    try {
        const deletedairplane = await airplanrespository.destroy(id);
        return deletedairplane; 
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new apperror(`the airplane you requested is not present`,error.statusCode);
        }
        throw new apperror(`cant delete the airplane`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

module.exports = { 
    createAirplan,
    getairplanes,
    getairplane,
    deleteairplane
}