import React from 'react';
import PageHeader from './PageHeader';
import FeaturedSection from './FeaturedSection';
import PageFooter from './PageFooter';
import PosterCollage from './Poster-Collage.jpg';
import Colyer from './Colyer.png';
import MorningGreys from './Morning-Greys.jpg';

function LandingPage() {
  return (
    <div className="LandingPage">
        <PageHeader></PageHeader>
        <FeaturedSection image={Colyer} title='Web Developer' description='<a href="http://www.colyerqualitybuilt.com">ColyerQualityBuilt.com</a> (and the portfolio you’re currently looking at!) were designed and built from the ground up by yours truly. I utilized a wordpress framework to build Ron Colyer’s site, focusing on scalability and responsiveness, so that his site would look clean and professional on any sized screen. This portfolio was built using ReactJS, with a focus on making it as streamlined and modern as possible. I have a passion for creating websites that not only look good, but feel good to navigate. I also have a passion for learning, and being able to constantly expand my knowledge while creating interesting and dynamic websites is a dream come true.'></FeaturedSection>
        <FeaturedSection image={PosterCollage} swapAlignment={true} title='Composer' description='I am an <a href="https://www.imdb.com/name/nm4960993/">award-winning composer</a>, having worked on more than 10 short films, a web series, and a feature film. I love finding ways to enhance the story with melodic themes and leitmotifs. Although much of my work has been for dramatic films, I have had to shift from genre to genre: Science Fiction and High Fantasy, Westerns, Action, Romance, and Indie Drama. Films that I have scored have received theatrical releases, won prestigious awards (such as the Grand Jury prize in Los Angeles’s Dances With Films), and been distributed by Netflix. Many of my scores can also be found on my <a href="https://open.spotify.com/artist/1qqjABuF6PNnGBOez6CZN9?si=XbmXxDCnR6ixygN1IsUaww">Spotify</a> page.'></FeaturedSection>
        <FeaturedSection image={MorningGreys} title='Songwriter' description='I have been writing and recording music for almost 15 years--ever since I picked up my first guitar. I have released music under my own name, and filled my <a href="https://soundcloud.com/seangiddings">Soundcloud</a> with experimental and genre-blending songs, as well as under the moniker <a href="https://open.spotify.com/artist/5JpNOXkG1qxOIqTzfV6CRD?si=1Krg2X5HSICnmXUKNig-bw">Sparrowghost</a>, which has a more instrumental/electronica feel. I have always used my music as a way to stretch myself creatively, and never let myself be put in a box with what kind of music I want to create. I have self-produced all of my work, which has given me the chance to learn how to create the sounds i’m looking for, as well as follow the creativity where it leads.'></FeaturedSection>
        <PageFooter></PageFooter>
    </div>
  );
}

export default LandingPage;
