const express = require("express");
const { getTrackByName, getTracks } = require("./controllers/trackController");
const router = express.Router();

router.route("/track").get(getTrackByName);

router.route("/tracks").get(getTracks);

module.exports = router;
