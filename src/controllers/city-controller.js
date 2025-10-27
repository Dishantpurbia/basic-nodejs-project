const { Citservice } = require(`../services`);
const {StatusCodes } = require(`http-status-codes`)

const {successresponse,errorresponse } = require(`../utils/common`);

async function creatcity(req,res) {
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
}

module.exports = {
    creatcity
}
