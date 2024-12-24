import React, { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Parent from "./Components/Parent/Parent";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Components/Footer/Footer";
import Navigator from "./Components/Navigator/Navigator";
import Another from "./Components/Another/Another";
import News from "./Components/News/News";
import Movies from "./Components/Movies/Movies";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <BrowserRouter>
            <Navigator />
            <Routes>
              <Route path="another" element={<Another />} />
              <Route path="/" element={<Home />}>
                <Route path="/" element={<Parent />} />
                <Route path="parent" element={<Parent />} />
                <Route path="about" element={<About />} />
                <Route path="news" element={<News />} />
                <Route path="movies" element={<Movies />} />
              </Route>
              <Route path="home" element={<Home />}>
                <Route path="parent" element={<Parent />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </>
    );
  }
}
