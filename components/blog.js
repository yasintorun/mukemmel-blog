import React from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Blog = ({ post }) => (
  <div className="card mb-4">
    <h2 className="card-header">
      <Link href={post.slug}>
        <a className="blog-title-link">{post.title}</a>
      </Link>
    </h2>
    <div className="card-body">
      <p className="card-text"><ReactMarkdown source={post.details} /></p>
    </div>
    <div className="date card-meta text-secondary">{post.date}</div>
    <style jsx>{`
    .date{
      text-align: right;
      margin: 12px 10px 24px 0;
    }
    `}</style>
  </div>
)

export default Blog;
