import React, { Component } from 'react';
import PortfolioHeadshot from './Portfolio-Headshot.png';
import './FeaturedSection.scss';

class FeaturedSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, description, swapAlignment} = this.props;
    const alignment = `FeaturedSection ${swapAlignment ? 'FeaturedSection--alignRight' : 'FeaturedSection--alignLeft'}`;
   
    return (
      <div className={alignment}>
        <div className="FeaturedSection__text">
          <h2 className='FeaturedSection__title'>
            {title}
          </h2>
          <p className='FeaturedSection__description'>
            {description}
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