import React from 'react';
import '../.css/AboutMe.css';

const AboutMe: React.FC = () => {
    return (
      <div className="body">
        <div className="generalContent">
        <div className="AboutMeContainer">
          <div className='AboutMeImage'> </div>
          <div className="AboutMeText">
          <h1>About Me</h1>
          <p>
            So writing an about me huh… Hi I’m Nora, Dutch, 19 years old and
            currently learning software development. I'm fascinated by all
            aspects of game development, but I'm particularly drawn to shader
            technology and engine development. As for my hobbies, I spend most
            of my free time online (surprising I know) gaming with friends.
            We’ve got a nice little all Dutch gaming/development group. I can
            always ask for support from them if I’m stuck on something. When I’m
            not calling or vibing with them I’m either coding, learning a
            language, drawing or working out. My most important qualities from
            my perspective would probably be my honesty, directness and my
            drivenness. When introduced to a new subject I will go for it with
            everything I’ve got. Same goes for taking lead in my project groups.
            I enjoy making sure that my projects run nice and smooth with proper
            communication. Just like I hope that I just properly communicated to
            the lovely reader of this text, who I am.
          </p>
          </div>
        </div>
        </div>
      </div>
    );
};

export default AboutMe;