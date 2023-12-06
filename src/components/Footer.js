import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2023 Meryem Sanem Küçükbayram. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://github.com/meryemsanem"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/meryemsanemkucukbayram/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
