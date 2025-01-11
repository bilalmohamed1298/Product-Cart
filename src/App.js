import React, { Component } from "react";
import Parent from "./Components/Parent/Parent";
import { BrowserRouter, Route, Routes } from "react-router";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Parent />} />
              <Route path="parent" element={<Parent />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
