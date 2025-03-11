const express = require("express");
const router = express.Router();
const poleController = require("../../controllers/pole.controller");
// user create
router.route("/").post(poleController.createPole).get(poleController.getPole);

module.exports = router;
