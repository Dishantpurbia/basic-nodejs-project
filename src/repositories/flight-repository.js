const { Flight, Airplan, Airport, sequelize } = require(`../models`);
const  crudrespository  = require(`./crud-repository`);
const { Op } = require("sequelize")


class Flightrepository extends crudrespository {
    constructor(){
        super(Flight);
    }

    async getallflight(filter,sort) {
        const response = await Flight.findAll({
            where: filter,
            attributes: [
                'id','flightNumber','airplaneId','departureAirportId','arrivalAirportId',
                'departureTime','arrivalTime','price','boardingGate','totalSeats',
                'createdAt','updatedAt'
            ],
            order: sort,
            include: [
                { 
                model: Airplan,
                as: "airplane",
                required: true
             },
             {
                model: Airport,
                as: "departureAirport",
                required: true,
                on: sequelize.where(
                    sequelize.col("departureAirport.code"),
                    "=",
                    sequelize.col("Flight.departureAirportId")
                )
             },
             {
                model: Airport,
                as: "arrivalAirport",
                required: true,
                on: sequelize.where(
                    sequelize.col("arrivalAirport.code"),
                    "=",
                    sequelize.col("Flight.arrivalAirportId")
                )
             }
            ]
        });
        return response;
    }
}


module.exports = Flightrepository;