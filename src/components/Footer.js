import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './images/ailearnt-logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the AiLearnt newsletter to receive development updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Learn More</h2>
            <Link to='/products'>AiBasics</Link>
            <Link to='https://zapier.com/blog/best-ai-productivity-tools/'>Tools</Link>
            <Link to='https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI'>Tutorials</Link>
            <Link to='https://globalai.community/'>Community</Link>
            <Link to='https://www.wsj.com/tech/ai'>News and Updates</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/ailearntsite' className='social-logo'>
              AiLearnt
              <img src={logo} alt="Logo" className="navbar-logo-image" />
            </Link>
          </div>
          <small className='website-rights'>AiLearnt © 2024</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
