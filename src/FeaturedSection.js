import React, { Component } from 'react';
import './FeaturedSection.scss';

class FeaturedSection extends Component {

  createDescription() {
    const {description} = this.props;

    return {__html: description};
  }

  render() {
    const {title, swapAlignment, image} = this.props;
    const classes = `FeaturedSection ${swapAlignment ? 'FeaturedSection--alignRight' : 'FeaturedSection--alignLeft'}`;
   
    return (
      <div className={classes}>
        <div className="FeaturedSection__text">
          <h2 className='FeaturedSection__title'>
            {title}
          </h2>
          <p dangerouslySetInnerHTML={this.createDescription()} className='FeaturedSection__description'>
          </p>
        </div>
        <div className='FeaturedSection__images'>
          <img className='FeaturedSection__image' src={image} alt={title}></img>
        </div>
      </div>
    );
  }
}

export default FeaturedSection;