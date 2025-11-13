const express = require("express");

const { infocontroller } = require("../../controllers");

const router = express.Router();

const airplanroutes = require(`./airplan-routes`);
const cityroutes = require(`./city-routes`);
const airportes = require(`./airport-routes`);
const flightroutes = require(`./flight-routes`);

router.use(`/airplan`,airplanroutes);
router.use(`/cities`,cityroutes);
router.use(`/airports`,airportes);
router.use(`/flights`,flightroutes);

router.get("/info",infocontroller.info);



module.exports = router;