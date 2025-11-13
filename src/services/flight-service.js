const { Flightrepository } = require(`../repositories`);
const apperror = require("../utils/errors/app-error");
const { StatusCodes } = require(`http-status-codes`)

const flightrepository = new Flightrepository();

async function createflight(data) {
    try {
        const newflight = await flightrepository.create(data);
        return newflight;
    } catch (error) {
        if( error.name ===`SequelizeValidationError` || error.name === `SequelizeUniqueConstraintError` ){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new apperror(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new apperror(`cannot create new flight`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    createflight
}