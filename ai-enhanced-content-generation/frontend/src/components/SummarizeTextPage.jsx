import React, { useState } from "react";
import axios from "axios";

const SummarizeTextPage = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarizeText = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/summarize-text`,
        { text }
      );
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Summarize Text</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize"
      />
      <button onClick={handleSummarizeText}>Summarize</button>
      <p>{summary}</p>
    </div>
  );
};

export default SummarizeTextPage;
