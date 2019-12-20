import React from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Blog = ({ post }) => (
    <div className="blog">
        <h2 className="blog-title">
            <Link href={post.slug}>
                <a className="blog-title-link">{post.title}</a>
            </Link>
        </h2>
        <div className="blog-text">
            <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
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
    `}</style>
    </div>
)

export default Blog;
