const { airportservice } = require(`../services`);
const { successresponse,errorresponse } = require(`../utils/common`)
const { StatusCodes } = require(`http-status-codes`);

async function createairport(req,res) {
    try {
        const newairport = await airportservice.createairport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        })
        successresponse.data = newairport;
        return res.status(StatusCodes.CREATED)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

async function getairport(req,res) {
    try {
        const getairport = await airportservice.getairport(req.params.id);
        successresponse.data = getairport;
        return res.status(StatusCodes.OK)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

async function getairports(req,res) {
    try {
        const getairports = await airportservice.getairports();
        successresponse.data = getairports;
        return res.status(StatusCodes.OK)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(errorresponse);
    }
};

async function deletedairport(req,res) {
    try {
        const deletedairport = await airportservice.destroyairport(req.params.id);
        successresponse.data = deletedairport;
        return res.status(StatusCodes.OK)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

async function updateairport(req,res) {
    try {
        const updairport = await airportservice.updateairport(req.params.id,{
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        })
        successresponse.data = updairport;
        return res.status(StatusCodes.OK)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

module.exports = {
    createairport,
    getairport,
    getairports,
    updateairport,
    deletedairport
}