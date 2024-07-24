const express = require("express");
const cors = require("cors");
const generateTextRoute = require("./routes/generateTextRoute");
const summarizeTextRoute = require("./routes/summarizeTextRoute");
const translateTextRoute = require("./routes/translateTextRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/generate-text", generateTextRoute);
app.use("/api/summarize-text", summarizeTextRoute);
app.use("/api/translate-text", translateTextRoute);

module.exports = app;
