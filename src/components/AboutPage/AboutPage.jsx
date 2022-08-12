import React from 'react';
import Nav from '../Nav/Nav';
import Headshot from '../Images/Headshot.jpg';


function AboutPage() {

  return (
    <div>
      {/* calling Navigation bar */}
      <Nav />
      {/* container for css */}
      <div className="thanks-container"> 
        <div className="student-text">
          <h5 className="underlined-text">Thanks:</h5>
          <p>Jemisin Cohort</p>
          <p>Liz Kerber</p>
          <p>Prime Digital Academy</p>
          <p>Michael Essenburg</p>
          <p>Luis De La Espriella</p>
          <p>Gonzalez Family</p>      
        </div>
      </div>
      <div className="connect-container"> 
        <div className="student-text">
          <h5 className="underlined-text">Connect:</h5>
          <p>www.linkedin.com/in/mariaisabelg</p>
          <p>https://github.com/MariaIsabelG</p>
          <img width="195px" height="300px" src={Headshot} />
        </div>
      </div>
    </div>
  )
};

export default AboutPage;
