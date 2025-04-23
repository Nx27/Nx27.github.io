import React from 'react';
import Siepie from '../../assets/Takkie_and_Siepie_The_Calico_Cat_Curse_Title.png';
import BeforeRefactor from '../../assets/Before item.png';
import AfterRefactor from '../../assets/RefactorAFTER generalpickup.png';
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
        <div className='project'>
          <div className="projectContent">
            <h2>Team flow</h2>
            <p>With little working time and a large team we managed to stay in control by implementing a makeshift agile flow.
              I learnt how to keep code quality high with little time through pull requests.
              We also held standups and standdowns so we could rapidly act when somebody in Sweden was struggling.
              Luckly I was able to sit in office with my own team for quick communication.</p>
          </div>
          <div className="projectContent">
            <h2>What I did for the team</h2>
            <p>I mainly focussed on flow and code ownership.
              I restructered the code, kept our file system in check and encapsulated/refactored where nessescary.
              <br /><i>Some of my favorite examples:</i></p>
            <img src={BeforeRefactor} /><img src={AfterRefactor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiepieAndTakkie;