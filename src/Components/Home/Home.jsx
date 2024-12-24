import React, { Component } from "react";
import { Link, Outlet } from "react-router";

export default class Home extends Component {
  render() {
    return (
        <div>
          <div className="p-2 mb-3 text-center text-white bg-danger">
        <h1 className="">
          <i className="fas fa-home"></i>This is Home Component
        </h1>
        
        <div className="d-flex justify-content-center bg-light ">
          <Link className="mx-3 text-decoration-none text-dark text-dark" to="parent">Parent</Link>
          <Link className="mx-3 text-decoration-none text-dark text-dark" to="about">About</Link>
          <Link className="mx-3 text-decoration-none text-dark text-dark" to="news">News</Link>
          <Link className="mx-3 text-decoration-none text-dark text-dark" to="movies">Movies</Link>
        </div>
      </div>
      <div>
        <Outlet/>
        
      </div>
        </div>
    );
  }
}
