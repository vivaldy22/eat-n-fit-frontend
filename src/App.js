import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./utils/navbar";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./utils/footer";
function App() {
  return (
    <div style={{ background: "#fff3dd" }}>
      <Navbar />
      <Route exact path="/" component={Home} />

      <Route exact path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Footer />
      {/* <Route path="/contact" component={PostPage} />
      <Route path="/tags" component={TagsPage} />
      <Route path="/userByid/:id" component={UserByIdPage} />
      <Route path="/userPost/:id" component={PostUserPage} />
      <Route path="/comment/:id" component={CommentPage} />
      <Route path="/tagsPost/:id" component={TagsPost} /> */}
    </div>
  );
}

export default App;
