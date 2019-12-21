import React from "react";
import fetch from "isomorphic-unfetch";
import Header from "../components/header";
import Footer from "../components/footer";
import Blog from "../components/blog";
import _Head from "../components/Head";

const BlogPost = ({ post }) => (
  <div className="container">
    <_Head title={post.title} />
    <Header />
    <Blog post={post} />

    <Footer />

  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
