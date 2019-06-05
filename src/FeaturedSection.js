import React, { Component } from 'react';
import PortfolioHeadshot from './Portfolio-Headshot.png';
import './FeaturedSection.scss';

class FeaturedSection extends Component {

  constructor(props) {
    super(props);
  }

  createDescription() {
    const {description} = this.props;

    return {__html: description};
  }

  render() {
    const {title, description, swapAlignment, image} = this.props;
    const alignment = `FeaturedSection ${swapAlignment ? 'FeaturedSection--alignRight' : 'FeaturedSection--alignLeft'}`;
   
    return (
      <div className={alignment}>
        <div className="FeaturedSection__text">
          <h2 className='FeaturedSection__title'>
            {title}
          </h2>
          <p dangerouslySetInnerHTML={this.createDescription()} className='FeaturedSection__description'>
          </p>
        </div>
        <div className='FeaturedSection__images'>
          <img className='FeaturedSection__image' src={image}></img>
        </div>
      </div>
    );
  }
}

export default FeaturedSection;