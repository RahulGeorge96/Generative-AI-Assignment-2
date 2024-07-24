
const express = require("express");
const summarizeTextController = require("../controllers/summarizeTextController");

const router = express.Router();

router.post("/", summarizeTextController);

module.exports = router;
