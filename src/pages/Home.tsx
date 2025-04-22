import React from 'react';
import '../.css/Home.css';
import { Link } from 'react-router-dom';
import Ascii from '../assets/ascii.png';
import Siepie from '../assets/Takkie_and_Siepie_The_Calico_Cat_Curse_Title.png'

const Home: React.FC = () => {
  return (
    <div className='body'>
      <div className='generalContent'>
        <div className='openingText'>
          <h3>Welcome to Home Page</h3>
          <h1>I'm Nora</h1>
          <p>Oh how did you end up here</p>
        </div>

        <div className='projectsPreview'>
          <h2>My Projects</h2>
          <p>Here are some of my projects</p>

          <div className='projectCards'>
            <div className='projectCard'>
              <Link to="/TheJourney"><img src={Ascii} /></Link>
              <h3>The Journey</h3>
              <p>My first project ever</p>
            </div>

            <div className='projectCard'>
              <Link to="/SiepieAndTakkie"><img src={Siepie} /></Link>
              <h3>Siepie and Takkie</h3>
              <p>International project</p>
            </div>

            <div className='projectCard'>
              <Link to="./ProjectsPage"><img /></Link>
              <h3>See more</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;