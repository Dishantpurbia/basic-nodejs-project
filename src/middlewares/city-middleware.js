const { StatusCodes } = require("http-status-codes");
const { error, errorresponse } = require(`../utils/common`);
const apperror = require(`../utils/errors/app-error`)

function validaterequestcity(req,res,next) {
    if(!req.body || !req.body.name){
        errorresponse.message = `somthing went wrong while creating city`;
        errorresponse.error = new apperror([`the city name not found in incoming city request`,StatusCodes.BAD_REQUEST]);
        res.status(StatusCodes.BAD_REQUEST)
        .json(errorresponse);
    }
    next();
}

module.exports = {
    validaterequestcity
}