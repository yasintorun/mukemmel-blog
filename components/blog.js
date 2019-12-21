import React from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Blog = ({ post }) => (
  <div className="card mb-4">
    <h2 className="card-header">
      <Link href={post.slug}>
        <a className="card-title">{post.title}</a>
      </Link>
    </h2>
    <div className="card-body">
      <p className="card-text"><ReactMarkdown source={post.details} /></p>
    </div>
    <div className=" date card-meta text-secondary">
      <a href="#"><span className="fa fa-share-alt" /></a>
      <p>{post.date}</p>
    </div>
    <hr />
    <style jsx>{`
      .date{
        text-align: right;
        margin: 12px 10px 4px 0;
      }
      a{
        text-decoration: none;
      }
      .card-header{
        text-align: center;
      }
    `}</style>
  </div>
)

export default Blog;
