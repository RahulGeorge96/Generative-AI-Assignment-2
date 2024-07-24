const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateText = async (prompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 100,
  });
  return response.data.choices[0].text.trim();
};

const summarizeText = async (text) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Summarize this: ${text}`,
    max_tokens: 100,
  });
  return response.data.choices[0].text.trim();
};

const translateText = async (text, targetLanguage) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Translate this to ${targetLanguage}: ${text}`,
    max_tokens: 100,
  });
  return response.data.choices[0].text.trim();
};

module.exports = {
  generateText,
  summarizeText,
  translateText,
};
