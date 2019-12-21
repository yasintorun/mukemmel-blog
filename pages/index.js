import React from "react";
import fetch from "isomorphic-unfetch";
import Header from "../components/header";
import Footer from "../components/footer";
import Blog from "../components/blog";
import _Head from "../components/Head";

const Home = ({ posts }) => (
  <div className="container">
    <_Head title="Home" />
    <Header />
    <div className="row">
      {/*AnaSayfa blog + sidebar şeklinde olacak(9+3)*/}
      <div className="col-md-9">
        {posts.map(post => (
          <Blog key={post.id} post={post} />
        ))}
      </div>
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src="/myPhoto.jpg" />
          <div className="card-body">
            <h4 className="card-title">Yasin Torun</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/hakkimda" className="btn btn-primary">Profili görüntüle</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />

  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
