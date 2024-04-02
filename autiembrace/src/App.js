import React from 'react';
import './App.css';
import LogoVideo from './LogoVideo.mp4'

function App() {
  return (
    <div className="background">
      <div>
        <video className="video-background" autoPlay muted loop>
        <source src={LogoVideo} type="video/mp4" />
      </video>
      </div>
      <div className='flex'>
        <h1 className="heading">Welcome to Autiembrace</h1>
        <p className='mont'>Stay tuned for the Big Reveal 🚀</p>
      </div>
    </div>
  );
}

export default App;
