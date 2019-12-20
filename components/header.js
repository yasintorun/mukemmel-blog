import React from 'react';
import Link from 'next/Link';
import Nav from './nav';

const Header = () => (
  <div className="hero">
    <h1 className="hero-title">Selman Kahya</h1>

    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
                
            `}
    </style>
    <div>
      <Nav />
    </div>
  </div>

)
export default Header;