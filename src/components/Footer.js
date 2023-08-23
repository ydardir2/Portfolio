import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Yousef Dardir
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
            </Link>
            <Link
              class='social-icon-link twitter'
              to=''
              target='_blank'
              aria-label='Twitter'
            >
            </Link>
                      <a
            class='social-icon-link facebook'
            href='https://www.facebook.com/profile.php?id=100008477499407'
            target='_blank'
            aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
            class='social-icon-link instagram'
            href='https://www.instagram.com/yousef.dardir/'
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </a>

                <a
        class='social-icon-link twitter'
        href='https://www.linkedin.com/in/yousef-dardir-227134206/'
        target='_blank'
        aria-label='LinkedIn'
      >
        <i class='fab fa-linkedin' />
      </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
