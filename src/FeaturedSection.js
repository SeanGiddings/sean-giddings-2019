import React, { Component } from 'react';
import PortfolioHeadshot from './Portfolio-Headshot.png';
import './FeaturedSection.scss';

class FeaturedSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title} = this.props;
    
    return (
      <div className="FeaturedSection">
        <div className="FeaturedSection__text">
          <h2 className='FeaturedSection__title'>
            {title}
          </h2>
          <p className='FeaturedSection__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='FeaturedSection__images'>
          <img src='https://via.placeholder.com/300'></img>
        </div>
      </div>
    );
  }
}

export default FeaturedSection;