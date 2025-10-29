const { Citservice } = require(`../services`);
const {StatusCodes } = require(`http-status-codes`)

const {successresponse,errorresponse } = require(`../utils/common`);
const apperror = require("../utils/errors/app-error");

async function createcity(req,res) {
    try {
        const newcity = await Citservice.createCity({
            name: req.body.name 
        })
        successresponse.data = newcity;
        return res.status(StatusCodes.OK)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse)
    }
};

async function deletecity(req,res) {
    try {
        const deletedcity = await Citservice.deletecity(req.params.id);
        successresponse.data = deletedcity;
        return res.status(StatusCodes.OK)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

async function updatecity(req,res) {
    try {
        const updatedcity = await Citservice.updatecity(req.params.id,{
            name : req.body.name
        })
        successresponse.data = updatedcity;
        return res.status(StatusCodes.OK)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

module.exports = {
    createcity,
    deletecity,
    updatecity
}
