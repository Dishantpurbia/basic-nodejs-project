const { errorresponse } = require(`../utils/common`);
const apperror = require("../utils/errors/app-error");
const { StatusCodes } = require(`http-status-codes`);

function validationcheck(req,res,next){
    if(!req.body || !req.body.name){
        errorresponse.error = new apperror([`The airport name not found in the incoming name request`,StatusCodes.BAD_REQUEST]);
        errorresponse.message = `Somthing went wrong while creating airport`;
        return res.status(StatusCodes.BAD_REQUESTe)
        .json(errorresponse);
    }
    next();
}

module.exports = {
    validationcheck
};