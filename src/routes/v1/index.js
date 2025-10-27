const express = require("express");

const { infocontroller } = require("../../controllers");

const router = express.Router();

const airplanroutes = require(`./airplan-routes`);
const cityroutes = require(`./city-routes`);

router.use(`/airplan`,airplanroutes);
router.use(`/cities`,cityroutes);

router.get("/info",infocontroller.info);



module.exports = router;