const express = require(`express`);

const { flightcontroller } = require(`../../controllers`);
const { filghtmiddleware } = require(`../../middlewares`);
const { datecheckmiddlerware } = require(`../../middlewares`);
const router = express.Router();

router.post(`/`,
    filghtmiddleware.validationcheck
    ,datecheckmiddlerware.comparetime
    ,flightcontroller.createflight);

module.exports = router;
