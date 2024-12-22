import React, { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Parent from "./Components/Parent/Parent";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Home />
          <Parent />
          <About />
        </div>
      </>
    );
  }
}
