
import React, { useState } from "react";
import axios from "axios";

const GenerateTextPage = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerateText = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/generate-text`,
        { prompt }
      );
      setGeneratedText(response.data.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Generate Text</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
      />
      <button onClick={handleGenerateText}>Generate</button>
      <p>{generatedText}</p>
    </div>
  );
};

export default GenerateTextPage;
