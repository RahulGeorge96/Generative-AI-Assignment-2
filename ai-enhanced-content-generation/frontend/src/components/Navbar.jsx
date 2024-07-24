import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/generate-text">Generate Text</Link>
      </li>
      <li>
        <Link to="/summarize-text">Summarize Text</Link>
      </li>
      <li>
        <Link to="/translate-text">Translate Text</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
