import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <section className="container">
          <footer className="text-center text-white bg-danger">
            <div className="container p-4 pb-0">
              <section className="">
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register for free</span>
                  <button
                    data-mdb-ripple-init
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </p>
              </section>
            </div>

            <div className="text-center p-3 bg-dark">
              © 2020 Copyright:
              <a className="text-white" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </a>
            </div>
          </footer>
        </section>
      </>
    );
  }
}
