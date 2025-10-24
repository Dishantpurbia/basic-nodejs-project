const { StatusCodes } = require("http-status-codes");
const { error, errorresponse } = require(`../utils/common`);
const apperror = require(`../utils/errors/app-error`)

function validaterequest(req,res,next) {
    if(!req.body.modelNumber){
        errorresponse.message = `somthing went wrong while creating airplane`;
        errorresponse.error = new apperror([`model number not found in incoming airlan request`,StatusCodes.BAD_REQUEST]);
        res.status(StatusCodes.BAD_REQUEST)
        .json(errorresponse);
    }
    next();
}

module.exports = {
    validaterequest
}