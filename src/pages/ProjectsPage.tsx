import React from "react";
import Project from "../components/Project";
import "../.css/ProjectsPage.css";

import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <div className="body">
      <div className="generalContent">
        <div className="heroContainer">
          <div className="heroImage">
            <h2>My Projects</h2>
            <p>Here are some of my projects</p>
            <div className='projectCards'>
              <div className='projectCard'>
                <Link to="./ProjectsPage"></Link>
                <img ></img>
                <h3>The Journey</h3>
                <p>My first project ever</p>
              </div>
              <div className='projectCard'>
                <Link to="./ProjectsPage"></Link>
                <img></img>
                <h3>Siepie</h3>
                <p>International project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
