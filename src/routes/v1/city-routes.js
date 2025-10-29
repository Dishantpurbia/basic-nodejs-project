const express = require(`express`);

const { citymiddleware } = require(`../../middlewares`);
const { citycontroller } = require(`../../controllers`);

const router = express.Router();

router.post(
    `/`,
     citymiddleware.validaterequestcity,
     citycontroller.createcity);

router.delete(`/:id`,citycontroller.deletecity);

router.patch(`/:id`,citycontroller.updatecity);

module.exports = router;