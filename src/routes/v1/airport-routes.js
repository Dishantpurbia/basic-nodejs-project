const express = require(`express`);

const{  Airportcontroller } = require(`../../controllers`)
const { airportmiddleware } = require(`../../middlewares`)

const router = express.Router();

router.post(`/`,
    airportmiddleware.validationcheck
   ,Airportcontroller.createairport);

router.get(`/:id`,Airportcontroller.getairport);

router.get(`/`,Airportcontroller.getairports);

router.delete(`/:id`,Airportcontroller.deletedairport);

router.patch(`/:id`,Airportcontroller.updateairport);

module.exports = router;


