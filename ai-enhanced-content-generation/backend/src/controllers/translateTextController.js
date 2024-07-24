const { translateText } = require("../services/openaiService");

const translateTextController = async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;
    const translation = await translateText(text, targetLanguage);
    res.status(200).json({ translation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = translateTextController;
