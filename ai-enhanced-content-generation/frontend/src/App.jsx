import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import GenerateTextPage from "./components/GenerateTextPage";
import SummarizeTextPage from "./components/SummarizeTextPage";
import TranslateTextPage from "./components/TranslateTextPage";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/generate-text" element={<GenerateTextPage />} />
      <Route path="/summarize-text" element={<SummarizeTextPage />} />
      <Route path="/translate-text" element={<TranslateTextPage />} />
    </Routes>
  </Router>
);

export default App;
