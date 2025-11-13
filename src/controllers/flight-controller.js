const { StatusCodes } = require(`http-status-codes`);
const { flightservice } = require(`../services`);
const { successresponse, errorresponse } = require("../utils/common");

async function createflight(req,res) {
    try {
        const newflight = await flightservice.createflight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        })
        successresponse.data = newflight;
        return res.status(StatusCodes.CREATED)
        .json(successresponse);
    } catch (error) {
        errorresponse.error = error;
        return res.status(error.statusCode)
        .json(errorresponse);
    }
};

module.exports = {
    createflight
}