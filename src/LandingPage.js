import React from "react";
import PageHeader from "./PageHeader";
import FeaturedSection from "./FeaturedSection";
import PageFooter from "./PageFooter";
import PosterCollage from "./Poster-Collage.jpg";
import CastleEscape from "./castle-escape.gif";
import sparrowghost from "./sparrowghost.jpeg";
import WebDev from "./webdev.jpg";
import automation from "./automation.png";

function LandingPage() {
  return (
    <div className="LandingPage">
      <PageHeader></PageHeader>
      <FeaturedSection
        image={automation}
        swapAlignment={true}
        title="Python/Automation Developer"
        description="During my tenure at Wiley and Academic Partnerships, I spearheaded the development and implementation of a comprehensive suite of automated solutions aimed at optimizing operational efficiency and enhancing productivity within our team.
        <br>
        These solutions encompass a wide range of functionalities, including but not limited to, streamlined WordPress Theme and Plugin Deployments, seamless Database Maintenance and Updates, effective management of GitHub Repositories utilizing the GitHub API, and automated handling of Jira Ticket queries and updates.Moreover, I engineered data manipulation processes leveraging AWS services such as S3, the Parameter Store, CloudFront, and Lambda Functions. Notably, these solutions were sometimes designed to incorporate HTTP authentication mechanisms, ensuring proper security.
        <br>
        I developed and integrated these automated processes into separate Jenkins jobs, all housed within preset Docker containers. This efficient setup allows our team to execute tasks effortlessly with just a few predefined triggers. Consequently, our workflow has been significantly optimized, enabling us to prioritize core objectives and achieve heightened productivity company-wide.
        "
      ></FeaturedSection>
      <FeaturedSection
        image={CastleEscape}
        title="C# Developer"
        description='<a href="https://github.com/SeanGiddings/CastleEscapeGame" target="_blank">Castle Escape</a> was written and developed as a project for Code Louisville, a nonprofit 
          organization designed to create more local developers. It is an old-school text adventure set in a magical tower, and was an opportunity to not only build a fully functional application 
          (with a focus on UX and clean code), but also an opportunity to mix development with my passion as a gamer. It was 100% written in C# as a console application, and fully playable (if you clone it from <a href="https://github.com/SeanGiddings/CastleEscapeGame" target="_blank">Github</a>).
          <br>
          Additionally, I have begun working as the Sound Designer for a video game being designed in Unity called <a href="https://store.steampowered.com/app/780190/We_Might_Die/" target="_blank">We Might Die</a>. I will be using FMOD, as well as the Unity Engine and C# code to design and implement all sound within the game.'
      ></FeaturedSection>
      <FeaturedSection
        image={WebDev}
        swapAlignment={true}
        title="Web Developer"
        description='<a href="http://www.colyerqualitybuilt.com" target="_blank">ColyerQualityBuilt.com</a>, <a href="http://grimtrails.com/" target="_blank">GrimTrails.com</a> (and the portfolio you’re currently looking at!) 
          were designed and built from the ground up by yours truly. Additionally, I built <a href="https://www.bhambroker.com/sell-your-car" target="_blank">Birmingham Broker&apos;s</a></div> informational page from someone else&apos;s design. 
          I utilized a wordpress framework to build both Ron Colyer’s and the Grim Trails sites, focusing on 
          scalability and responsiveness, so that their sites would look clean and professional on any sized screen. This portfolio was built using ReactJS, 
          with a focus on making it as streamlined and modern as possible. I have a passion for creating websites that not only look good, but feel good to navigate. 
          I also have a passion for learning, and being able to constantly expand my knowledge while creating interesting and dynamic websites is a dream come true.'
      ></FeaturedSection>

      <FeaturedSection
        image={PosterCollage}
        title="Composer"
        description='I am an <a href="https://www.imdb.com/name/nm4960993/" target="_blank">award-winning composer</a>, having worked on more than 10 short films, a web series, and two feature films. I love finding ways to enhance the story with melodic themes and leitmotifs. Although much of my work has been for dramatic films, I have had to shift from genre to genre: Science Fiction and High Fantasy, Westerns, Action, Romance, and Indie Drama. Films that I have scored have received theatrical releases, won prestigious awards (such as the Grand Jury prize in Los Angeles’s Dances With Films), and been distributed by Netflix. Many of my scores can also be found on my <a href="https://open.spotify.com/artist/1qqjABuF6PNnGBOez6CZN9?si=XbmXxDCnR6ixygN1IsUaww" target="_blank">Spotify</a> page.'
      ></FeaturedSection>
      <FeaturedSection
        image={sparrowghost}
        swapAlignment={true}
        title="Songwriter"
        description='I have been writing and recording music for over 20 years--ever since I picked up my first guitar. I have released music under my own name, as well as under the moniker <a href="https://open.spotify.com/artist/5JpNOXkG1qxOIqTzfV6CRD?si=1Krg2X5HSICnmXUKNig-bw" target="_blank">Sparrowghost</a>. I have been very excited to share my music, and have generated over 12,000 plays on spotify with the release of Summer Ends Too Soon, alone. I have self-produced all of my work, which gives me the freedom to create anything I want at the pace I want to. For more information about my music career, visit <a href="https://sparrowghost.com/" target="_blank">the Sparrowghost website</a>.'
      ></FeaturedSection>
      <PageFooter></PageFooter>
    </div>
  );
}

export default LandingPage;
