import React from 'react';
import PageHeader from './PageHeader';
import FeaturedSection from './FeaturedSection';
import PageFooter from './PageFooter';
import PosterCollage from './Poster-Collage.jpg';
import CastleEscape from './castle-escape.gif';
import MorningGreys from './Morning-Greys.jpg';
import WebDev from './webdev.jpg';

function LandingPage() {
  return (
    <div className="LandingPage">
      <PageHeader></PageHeader>
      <FeaturedSection
        image={WebDev}
        title='Web Developer'
        description='<a href="http://www.colyerqualitybuilt.com" target="_blank">ColyerQualityBuilt.com</a>, <a href="http://grimtrails.com/" target="_blank">GrimTrails.com</a> (and the portfolio you’re currently looking at!) 
          were designed and built from the ground up by yours truly. Additionally, I built <a href="https://www.bhambroker.com/sell-your-car" target="_blank">Birmingham Broker&apos;s</a></div> informational page from someone else&apos;s design. 
          I utilized a wordpress framework to build both Ron Colyer’s and the Grim Trails sites, focusing on 
          scalability and responsiveness, so that their sites would look clean and professional on any sized screen. This portfolio was built using ReactJS, 
          with a focus on making it as streamlined and modern as possible. I have a passion for creating websites that not only look good, but feel good to navigate. 
          I also have a passion for learning, and being able to constantly expand my knowledge while creating interesting and dynamic websites is a dream come true.'>
      </FeaturedSection>
      <FeaturedSection
        image={CastleEscape}
        swapAlignment={true}
        title='C# Developer'
        description='<a href="https://github.com/SeanGiddings/CastleEscapeGame" target="_blank">Castle Escape</a> was written and developed as a project for Code Louisville, a nonprofit 
          organization designed to create more local developers. It is an old-school text adventure set in a magical tower, and was an opportunity to not only build a fully functional application 
          (with a focus on UX and clean code), but also an opportunity to mix development with my passion as a gamer. It was 100% written in C# as a console application, and fully playable (if you clone it from github).'>
      </FeaturedSection>
      <FeaturedSection image={PosterCollage} title='Composer' description='I am an <a href="https://www.imdb.com/name/nm4960993/" target="_blank">award-winning composer</a>, having worked on more than 10 short films, a web series, and a feature film. I love finding ways to enhance the story with melodic themes and leitmotifs. Although much of my work has been for dramatic films, I have had to shift from genre to genre: Science Fiction and High Fantasy, Westerns, Action, Romance, and Indie Drama. Films that I have scored have received theatrical releases, won prestigious awards (such as the Grand Jury prize in Los Angeles’s Dances With Films), and been distributed by Netflix. Many of my scores can also be found on my <a href="https://open.spotify.com/artist/1qqjABuF6PNnGBOez6CZN9?si=XbmXxDCnR6ixygN1IsUaww" target="_blank">Spotify</a> page.'></FeaturedSection>
      <FeaturedSection image={MorningGreys} swapAlignment={true} title='Songwriter' description='I have been writing and recording music for almost 15 years--ever since I picked up my first guitar. I have released music under my own name, and filled my <a href="https://soundcloud.com/seangiddings" target="_blank">Soundcloud</a> with experimental and genre-blending songs, as well as under the moniker <a href="https://open.spotify.com/artist/5JpNOXkG1qxOIqTzfV6CRD?si=1Krg2X5HSICnmXUKNig-bw" target="_blank">Sparrowghost</a>, which has a more instrumental/electronica feel. I have always used my music as a way to stretch myself creatively, and never let myself be put in a box with what kind of music I want to create. I have self-produced all of my work, which has given me the chance to learn how to create the sounds i’m looking for, as well as follow the creativity where it leads.'></FeaturedSection>
      <PageFooter></PageFooter>
    </div>
  );
}

export default LandingPage;
