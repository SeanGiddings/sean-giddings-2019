import React, { Component } from 'react';
import './PageFooter.scss';
import Linkedin from './Linkedin.png'
import Github from './github.png'
class PageFooter extends Component {
  getYear() {
    return new Date().getFullYear();
  }
  
  render() {
    return (
      <div className="PageFooter">
        <div className="PageFooter__text">
          Sean Giddings <span className="PageFooter__copyright">&copy;{this.getYear()}</span>
        </div>
        <div class="PageFooter__socialmedia">
          <a href='https://www.linkedin.com/in/sean-giddings-350a3213/' target="_blank">
            <img src={Linkedin} alt="LinkedIn Icon" className='PageFooter__linkedin'></img>
          </a>
          <a href='https://github.com/SeanGiddings' target="_blank">
            <img src={Github} alt="Github Icon" className='PageFooter__github'></img>
          </a>
        </div>
      </div>
    );
  }
}


export default PageFooter;