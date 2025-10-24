const express = require(`express`);

const { airplanmiddleware } = require(`../../middlewares`);
const { Airplancontroller} = require(`../../controllers`); 

const router = express.Router();

router.post(`/`
    ,airplanmiddleware.validaterequest
    ,Airplancontroller.createAirplan
);

router.get(`/`,Airplancontroller.getairplanes);


module.exports = router;