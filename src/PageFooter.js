import React, { Component } from 'react';
import './PageFooter.scss';
import Linkedin from './Linkedin.png'

class PageFooter extends Component {

  render() {
    return (
      <div className="PageFooter">
        <div className="PageFooter__text">
          Sean Giddings <span className="PageFooter__copyright">&copy;2020</span>
        </div>
        <a href='https://www.linkedin.com/in/sean-giddings-350a3213/'>
          <img src={Linkedin} alt="LinkedIn Icon" className='PageFooter__linkedin'></img>
        </a>
      </div>
    );
  }
}

export default PageFooter;