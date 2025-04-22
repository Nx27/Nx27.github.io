import React from 'react';
import Siepie from '../../assets/Takkie_and_Siepie_The_Calico_Cat_Curse_Title.png';

const SiepieAndTakkie: React.FC = () => {
  return (
    <div className='body'>
      <div className='generalContent'>
        <div className='heroContainer'>
          <div className='heroImage'>
            <img src={Siepie} alt="Siepie and Takkie" />
          </div>
          <div className='heroText'>
            <h1>Siepie and Takkie</h1>
          </div>
        </div>
        <div className='projectDescription'>
          <h2>Project Description</h2>
          <div className='descriptionText'>
            <p>An eight man international project about a cat and a guy looking to cure the curse of the calico cat.</p>
            <p>We used using Unity and C# to develop the game and GitHub for version control and collaboration. The game even has its <a>own dedicated site</a></p>
            <div className='infoWidgets'>
              <img></img>
              <img></img>
              <img></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiepieAndTakkie;