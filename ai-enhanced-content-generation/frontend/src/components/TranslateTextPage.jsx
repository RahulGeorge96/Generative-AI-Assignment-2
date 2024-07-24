import React, { useState } from "react";
import axios from "axios";

const TranslateTextPage = () => {
  const [text, setText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [translation, setTranslation] = useState("");

  const handleTranslateText = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/translate-text`,
        { text, targetLanguage }
      );
      setTranslation(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Translate Text</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <input
        type="text"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        placeholder="Enter target language"
      />
      <button onClick={handleTranslateText}>Translate</button>
      <p>{translation}</p>
    </div>
  );
};

export default TranslateTextPage;
