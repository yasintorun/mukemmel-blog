import React from 'react';
import Link from 'next/Link';

const Header = () => (
    <div className="hero">
        <h1 className="hero-title">Selman Kahya</h1>
        <div className="hero-social-links">
            <Link href="https://medium.com/@selmankahya">
                <a className="social-link">Medium</a>
            </Link>
            <Link href="https://www.twitter.com/selmankahyax">
                <a className="social-link">Twitter</a>
            </Link>
            <Link href="https://www.linkedin.com/in/selmankahya">
                <a className="social-link">LinkedIn</a>
            </Link>
            <Link href="https://www.instagram.com/selmankahyax/?hl=en">
                <a className="social-link">Instagram</a>
            </Link>
        </div>
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
    </div>

)
export default Header;