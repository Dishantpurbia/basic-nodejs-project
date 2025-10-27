const express = require(`express`);

const { citymiddleware } = require(`../../middlewares`);
const { citycontroller } = require(`../../controllers`);

const router = express.Router();

router.post(
    `/`,
     citymiddleware.validaterequestcity,
     citycontroller.createcity);

module.exports = router;