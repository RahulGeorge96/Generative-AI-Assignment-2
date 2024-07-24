const express = require("express");
const translateTextController = require("../controllers/translateTextController");

const router = express.Router();

router.post("/", translateTextController);

module.exports = router;
