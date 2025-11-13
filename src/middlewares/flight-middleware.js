const { StatusCodes } = require(`http-status-codes`);
const { errorresponse } = require("../utils/common");
const apperror = require("../utils/errors/app-error");

function validationcheck(req,res,next){
    if(!req.body || !req.body.flightNumber){
        errorresponse.error = new apperror([`name is not present in side the data you are sending`,StatusCodes.BAD_REQUEST]);
        errorresponse.message = `Something went while crreating flight`;
        return res.status(StatusCodes.BAD_REQUEST)
        .json(errorresponse);
    }
    next();
};

module.exports = {
    validationcheck
};