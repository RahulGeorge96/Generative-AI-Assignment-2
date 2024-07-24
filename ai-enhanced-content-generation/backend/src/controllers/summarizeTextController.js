const { summarizeText } = require("../services/openaiService");

const summarizeTextController = async (req, res) => {
  try {
    const { text } = req.body;
    const summary = await summarizeText(text);
    res.status(200).json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = summarizeTextController;
