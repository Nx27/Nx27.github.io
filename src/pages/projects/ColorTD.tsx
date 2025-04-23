import React from 'react';
import Artboard1 from '../../assets/Artboard 1.png'

const ColorTD: React.FC = () => {
  return (
    <div className='body'>
      <div className='generalContent'>
        <div className='heroContainer'>
          <div className='heroImage'>
            <img src="https://github.com/Nx27-ma/colorTD/raw/master/GitPictures/MainScreenTowerDefense.png" alt="ColorTD main menu" />
          </div>
          <div className='heroText'>
            <h1>ColorTD</h1>
          </div>
        </div>
        <div className='projectDescription'>
          <h2>Project Description</h2>
          <div className='descriptionText'>
            <p>My first solo unity C# project (a towerdefense game)</p>
            <div className='infoWidgets'>
              <img></img>
              <img></img>
              <img></img>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className="projectContent">
            <h2>Made my own spritesheets for the game!</h2>
            <img src={Artboard1} alt="Asset collection colorTD" />
          </div>
          <div className="projectContent">
            <h2>My own collider system</h2>
            <p>I didn't want to use the unity collider system as a little
              added challenge so I wrote my own instead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTD;