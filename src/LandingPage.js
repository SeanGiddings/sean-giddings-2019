import React from 'react';
import PortfolioHeadshot from './Portfolio-Headshot.png';
import './LandingPage.scss';

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="LandingPage__header">
        <img src={PortfolioHeadshot} className="LandingPage__headshot" alt="headshot" />
        <h1 className="LandingPage__intro">
          Hello! I'm <span className="LandingPage__name">Sean Giddings</span> and I am
        </h1>
        <div className="LandingPage__professions">
          <div className="LandingPage__profession LandingPage__profession--developer">
            a Web Developer
          </div>
          <div className="LandingPage__profession LandingPage__profession--composer">
            a Composer
          </div>
          <div className="LandingPage__profession LandingPage__profession--songwriter">
            a Songwriter
          </div>  
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
