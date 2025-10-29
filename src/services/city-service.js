const { Cityrespository } = require(`../repositories`);
const { StatusCodes } = require(`http-status-codes`);
const apperror = require(`../utils/errors/app-error`);

const cityrespository = new Cityrespository();

async function createCity(data) {
    try {
        const newcity = await cityrespository.create(data);
        return newcity;
    } catch (error) {
        if(error.name === `SequelizeValidationError` || error.name === `SequelizeUniqueConstraintError`){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new apperror(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new apperror(`cannot create new city`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function deletecity(id) {
    try {
        const deletedcity = await cityrespository.destroy(id);
        return deletedcity;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new apperror(`The city you want to delete is not present inside the recorde`,error.statusCode);
        }
        throw new apperror(`cannot delete the city`,StatusCodes.INTERNAL_SERVER_ERROR);
    }  
};

async function updatecity(id,data) {
    try {
        const updatedcity = await cityrespository.update(id,data);
        return updatedcity;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new apperror(`the city you want to update is not present inside the record`,error.statusCode)
        }
        throw new apperror(`cannot update city`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports= {
    createCity,
    deletecity,
    updatecity
};