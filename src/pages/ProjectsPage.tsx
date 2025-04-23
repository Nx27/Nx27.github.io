import React from "react";
import Project from "../components/Project";
import "../.css/ProjectsPage.css";
import Siepie from "../assets/Takkie_and_Siepie_The_Calico_Cat_Curse_Title.png";
import Ascii from "../assets/ascii.png";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <div className="body">
      <div className="generalContent">

        <div className='projectsPreview'>
          <h2>My Projects</h2>
          <p>All of my projects are displayed here</p>

          <div className='projectCards'>
            <div className='projectCard'>
              <Link to="/TheJourney"><img src={Ascii} /></Link>
              <div className="projectCardText">
                <h3>The Journey</h3>
                <p>My first project ever</p>
              </div>
            </div>

            <div className='projectCard'>
              <Link to="/SiepieAndTakkie"><img src={Siepie} /></Link>
              <div className="projectCardText">
                <h3>Siepie and Takkie</h3>
                <p>International project</p>
              </div>
            </div>

            <div className='projectCard'>
              <Link to="./ColorTD"><img src="https://github.com/Nx27-ma/colorTD/raw/master/GitPictures/MainScreenTowerDefense.png" /></Link>
              <div className="projectCardText">
                <h3>ColorTD</h3>
                <p>My first unity solo project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProjectsPage;
