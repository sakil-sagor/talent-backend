const express = require("express");
const router = express.Router();
const pollController = require("../../controllers/poll.controller");

router.route("/").post(pollController.createPoll).get(pollController.getPoll);

module.exports = router;
