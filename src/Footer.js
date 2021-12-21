import React from 'react';
import { social } from './data';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <nav className="nav navbar">
        <div className="nav-center">
          <ul className="social-icons">
            {social.map((networks) => {
              const { id, url, icon } = networks;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <p className="copyright">
        Manuel Morales Web Develper All the Rights Reserve {year}
        <FaRegCopyright />
      </p>
    </footer>
  );
};
export default Footer;
