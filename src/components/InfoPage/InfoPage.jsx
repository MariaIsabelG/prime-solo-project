import React from 'react';
import Nav from '../Nav/Nav';

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
        <p>Google Fonts</p>
      </div>
      <div className="sources-container">
        <h5 className="underlined-text">Sources:</h5>
        <p>Background: https://www.behance.net/FezEscalante</p>
        <p>Pixel bubbles: https://pixelspeechbubble.com/</p>
      </div>
      <div className="challenges-container">
        <h5 className="underlined-text">Biggest challenge:</h5>
          <li>Learning how Chart Js receives and handles data</li>
          <li>Creating two Y axis on the charts</li>
        <h5 className="underlined-text">Next steps:</h5>
        <li>Teachers are able to add emotions and sensations to the app</li>
        <li>Making the app more accessible in terms of design and usability</li>
      </div>
    </div>
  )
};

export default InfoPage;
