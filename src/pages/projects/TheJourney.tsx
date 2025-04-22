import React from 'react';
import Ascii from '../../assets/ascii.png';
import FlowchartTheJourney from '../../assets/Flowchart the journey 1620x1021 with legenda.png';
import AsciiClas from "../../assets/AsciiCharactersArray"

const TheJourney: React.FC = () => {
  return (
    <div className='body'>
      <div className='generalContent'>
        <div className='heroContainer'>
          <div className='heroImage'>
            <img src={Ascii} alt="" />
          </div>
          <div className='heroText'>
            <h1>The Journey</h1>
          </div>
        </div>
        <div className='projectDescription'>
          <h2>Project Description</h2>
          <div className='descriptionText'>
            <p>My fist project ever made completely in console with NodeJs</p>
            <div className='infoWidgets'>
              <img></img>
              <img></img>
              <img></img>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className="projectContent">
            <h2>Dialog system</h2>
            <p>We were tasked to make up our own story for this console game. This is the flowchart I made for the story. Every ImgIndex is another frame of the story.</p>
            <img height="500px" src={FlowchartTheJourney} alt="Flowchart" />
          </div>
          <div className="projectContent">
            <h2>My Ascii art</h2>
            <p>All the ascii art is made by myself in word here are the three main characters in the story</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheJourney;