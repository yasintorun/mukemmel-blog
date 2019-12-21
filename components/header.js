import React from 'react';
import Nav from './nav';
import Link from 'next/link'
const Header = () => (
  <div className="hero">
    <h1 className="hero-title"><a href="/">Selman Kahya</a></h1>
    <div className="hero-social-links">
      <Link href="https://medium.com/@selmankahya">
        <a className="social-link"><span className="	fa fa-medium" /></a>
      </Link>
      <Link href="https://www.twitter.com/selmankahyax">
        <a className="social-link"><span className="	fa fa-twitter" /></a>
      </Link>
      <Link href="https://www.linkedin.com/in/selmankahya">
        <a className="social-link"><span className="	fa fa-linkedin" /></a>
      </Link>
      <Link href="https://www.instagram.com/selmankahyax/?hl=en">
        <a className="social-link"><span className="	fa fa-instagram" /></a>
      </Link>
    </div>
    <Nav />
    <style jsx>{`
      .hero{
        text-align: center;
        margin: 48px 0;
      }
      .hero-title a{
        font-size: 48px;
        color: #333;
      }
      a{
        text-decoration: none;
      }
      .social-link{
        margin-right: 10px;
        color: tomato;
      }
      .social-link:hover{
        color: red;
      }
      
    `}</style>
  </div>

)
export default Header;