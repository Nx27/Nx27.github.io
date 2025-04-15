import React from "react";
import { Link } from "react-router-dom";
import App from "../App";


function Header() {
  return (
    <header>
      <h1>HEADER</h1>
      <nav>
        <ul>
          <li>
            <Link to="../App">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
