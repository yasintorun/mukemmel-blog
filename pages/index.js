import React from "react";
import fetch from "isomorphic-unfetch";
import Header from "../components/header";
import Footer from "../components/footer";
import Blog from "../components/blog";
import _Head from "../components/Head";

const Home = ({ posts }) => (
  <div className="container">
    <_Head />
    <Header />

    {posts.map(post => (
      <Blog post={post} />
    ))}

    <Footer />
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
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
