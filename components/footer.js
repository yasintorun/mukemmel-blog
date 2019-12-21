import React from 'react';

const Footer = () => (
    <div className="footer">
        <p>&copy; Copyright 2019 <a href="http://www.mukemmel.blog/" target="_blank">Mukemmel.blog</a></p>

        <style jsx>{`
            .footer {
                background-color: #333;
                padding: 10px 0;
                margin: 8px 0;
                color: white;
                text-align: center;
            }
        `}</style>
    </div>
)
export default Footer;
