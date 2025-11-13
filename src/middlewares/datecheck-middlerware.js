const { StatusCodes } = require(`http-status-codes`);
const { errorresponse } = require("../utils/common");
const apperror = require("../utils/errors/app-error");
function comparetime(req,res,next){
    const { departureTime , arrivalTime } = req.body;

    if(!departureTime,!arrivalTime){
        errorresponse.message = `cant create flight`;
        errorresponse.error = new apperror([`departuetime and arrivaltime are needed in request`,StatusCodes.BAD_REQUEST]);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(errorresponse);
    };
    const deptime = new Date(departureTime);
    const arrtime = new Date(arrivalTime);

    if(deptime.getTime() >= arrtime.getTime()){
        errorresponse.message = `cant create flight`;
        errorresponse.error = new apperror([`Arrival time must be after departure time`,StatusCodes.BAD_REQUEST]);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(errorresponse);
    };
    next();
}

module.exports = {
    comparetime
}