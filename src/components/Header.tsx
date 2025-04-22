import React, { EventHandler } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import App from "../App";

function Header() {
  const navigate = useNavigate();
  const handleDelayedClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setTimeout(() => {
      navigate(path);
    }, 1000);
  };
  return (
    <header>
      <h1>HEADER</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={(e) => handleDelayedClick(e, "./")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="./ProjectsPage" onClick={(e) => handleDelayedClick(e, "./ProjectsPage")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="./AboutMe" onClick={(e) => handleDelayedClick(e, "./AboutMe")}            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
