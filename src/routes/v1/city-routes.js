const express = require(`express`);

const { citycontroller } = require(`../../controllers`);

const router = express.Router();

router.post(`/`,citycontroller.creatcity);

module.exports = router;