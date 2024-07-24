const express = require("express");
const generateTextController = require("../controllers/generateTextController");

const router = express.Router();

router.post("/", generateTextController);

module.exports = router;
