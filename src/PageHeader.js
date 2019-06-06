import React, { Component } from 'react';
import PortfolioHeadshot from './Portfolio-Headshot.png';
import './PageHeader.scss';
import animateScrollTo from 'animated-scroll-to';

class PageHeader extends Component {
 
  constructor(props) {
    super(props);

    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown = () => {
    animateScrollTo(document.querySelector('.FeaturedSection'));
  }

  render() {
    return (
      <div className="PageHeader">
        <header className="PageHeader__header">
          <img src={PortfolioHeadshot} className="PageHeader__headshot" alt="headshot" />
          <h1 className="PageHeader__intro">
            Hello! I'm <span className="PageHeader__name">Sean Giddings</span> and I am
          </h1>
          <div className="PageHeader__professions">
            <div className="PageHeader__profession PageHeader__profession--developer">
              a Web Developer
            </div>
            <div className="PageHeader__profession PageHeader__profession--composer">
              a Composer
            </div>
            <div className="PageHeader__profession PageHeader__profession--songwriter">
              a Songwriter
            </div>  
          </div>
          <button onClick={this.scrollDown} className='PageHeader__button'> <i className="fa fa-arrow-circle-o-down PageHeader__arrow"></i></button>
        </header>
      </div>
    );
  }
}

export default PageHeader;
