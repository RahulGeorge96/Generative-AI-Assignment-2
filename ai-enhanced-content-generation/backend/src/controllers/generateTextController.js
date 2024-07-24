const { generateText } = require("../services/openaiService");

const generateTextController = async (req, res) => {
  try {
    const { prompt } = req.body;
    const text = await generateText(prompt);
    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = generateTextController;
