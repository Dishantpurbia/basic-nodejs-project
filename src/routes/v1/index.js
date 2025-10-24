const express = require("express");

const { infocontroller } = require("../../controllers");

const router = express.Router();

const airplanroutes = require(`./airplan-routes`);

router.use(`/airplan`,airplanroutes);

router.get("/info",infocontroller.info);

module.exports = router;