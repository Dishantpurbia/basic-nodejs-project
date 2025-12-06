const { Flightrepository } = require(`../repositories`);
const apperror = require("../utils/errors/app-error");
const { Op } = require('sequelize');
const { StatusCodes } = require(`http-status-codes`)

const flightrepository = new Flightrepository();

async function createflight(data) {
    try {
        const newflight = await flightrepository.create(data);
        return newflight;
    } catch (error) {
        if( error.name ===`SequelizeValidationError` || error.name === `SequelizeUniqueConstraintError` ){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new apperror(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new apperror(`cannot create new flight`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

async function getallflight(query) {
    let customfilter = {};
    let sortfilter = [];
    const endingdate = " 23:59:00";
    if(query.trips){
         const [departureAirportId,arrivalAirportId] = query.trips.split("-");
        customfilter.departureAirportId = departureAirportId;
        customfilter.arrivalAirportId = arrivalAirportId;
        //todo
    }

    if(query.price){
        const [minprice,maxprice] = query.price.split("-");
        customfilter.price = {
            [ Op.between ] : [minprice,maxprice]
        }
    }

    if(query.travellers){
        customfilter.totalSeats = {
            [ Op.gte ] : query.travellers
        }
    }

    if(query.tripdate){
        customfilter.departureTime = {
            [ Op.between ] : [query.tripdate, query.tripdate + endingdate]
        } 
    }

    if(query.sort){
        const temp = query.sort.split(",");
        const sortfilters = temp.map(item => item.split("_"));
        sortfilter = sortfilters;
    }

    try {
        const flight = await flightrepository.getallflight(customfilter,sortfilter);
        return flight;
    } catch (error) {
        throw new apperror("cannot filter the query",StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    createflight,
    getallflight
};