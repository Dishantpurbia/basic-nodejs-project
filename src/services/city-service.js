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


module.exports= {
    createCity
};