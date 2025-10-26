const { StatusCodes } = require(`http-status-codes`)

const { Airplansservice } = require(`../services`);
const {errorresponse,successresponse} = require(`../utils/common`);


async function createAirplan(req,res) {
    try {
        const newairplan = await Airplansservice.createAirplan({ 
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        successresponse.data = newairplan;
        return res.status(StatusCodes.CREATED)
        .json(successresponse)
        
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

async function getairplanes(req,res) {
    try {
        const airplans = await Airplansservice.getairplanes();
        successresponse.data = airplans;
        return res.status(StatusCodes.OK)
        .json(successresponse)
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

async function getairplane(req,res) {
    try {
        const airplans = await Airplansservice.getairplane(req.params.id);
        successresponse.data = airplans;
        return res.status(StatusCodes.OK)
        .json(successresponse)
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
    
}

module.exports = {
    createAirplan,
    getairplanes,
    getairplane
};