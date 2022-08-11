import React from 'react';
import Nav from '../Nav/Nav';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div>
      <Nav />
      <div className="thanks-container">
        <div className="student-text">
          <h5>Thanks:</h5>
          <p>Jemisin Cohort</p>
          <p>Liz Kerber</p>
          <p>Michael Essenburg</p>
          <p>Luis De La Espriella</p>
          <p>Gonzalez Family</p>
          <p>Gaiman Cohort</p>      
        </div>
      </div>
    </div>
  )
};

export default AboutPage;
