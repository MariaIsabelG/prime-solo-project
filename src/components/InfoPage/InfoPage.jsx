import React from 'react';
import Nav from '../Nav/Nav';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div >
      <Nav />
      <div className="techused-container">
        <h5 className="underlined-text">Technologies used:</h5>
        <p>React</p>
        <p>Redux</p>
        <p>Redux Saga</p>
        <p>Node Js</p>
        <p>Express</p>
        <p>CSS</p>
        <p>Axios</p>
        <p>SQL</p>
        <p>Chart Js</p>
      </div>
      <div className="sources-container">
        <h5 className="underlined-text">Sources:</h5>
        <p>Background: https://www.behance.net/FezEscalante</p>
        <p>Pixel bubbles: https://pixelspeechbubble.com/</p>
      </div>
      <div className="challenges-container">
        <h5 className="underlined-text">Biggest challenge:</h5>
        <p>Figuring out how to implement data into Chart Js </p>
        <h5>Next steps:</h5>
        <p>Adding add emotions and add sensations buttons that will reflect both in the student view and the charts</p>
      </div>
    </div>
  );
}

export default InfoPage;
