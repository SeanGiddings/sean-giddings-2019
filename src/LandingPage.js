import React from 'react';
import PortfolioHeadshot from './Portfolio-Headshot.png';
import PageHeader from './PageHeader';
import FeaturedSection from './FeaturedSection';

function LandingPage() {
  return (
    <div className="LandingPage">
        <PageHeader></PageHeader>
        <FeaturedSection title='Web Developer'></FeaturedSection>
        <FeaturedSection title='Composer'></FeaturedSection>
        <FeaturedSection title='Songwriter'></FeaturedSection>
    </div>
  );
}

export default LandingPage;
