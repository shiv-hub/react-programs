import React, { useState, useEffect } from "react";
import Person from "./Person/Person.js";
import "./App.css";
import Product from "./Product/Product.js";
import Poster from "./Poster/Poster.js";
import Header from "./Header/Header.js";
import Products from "./Products/Products.js";
import ContactUs from "./ContactUs/ContactUs.js";
import ConnectWithUs from "./ConnectWithUs/ConnectWithUs.js";
import Footer from "./Footer/Footer.js";

const switchHandler = () => {
  console.log("switch Handler Click");
};

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {/* <button onClick={switchHandler}>Switch</button>
      <p>{posts}</p>
      <Person name="Shiv"></Person>
      <Product /> */}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <Header />
      <Poster />
      {/* <Products /> */}
      <ContactUs />
      <ConnectWithUs />
      <Footer />
    </div>
  );
}

export default App;
