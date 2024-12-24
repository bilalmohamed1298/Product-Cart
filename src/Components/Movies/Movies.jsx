import axios from "axios";
import React, { Component } from "react";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  getApi = async () => {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    this.setState({ movies: data.results });
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    console.log(this.state.movies);
    var imageURL = "https://image.tmdb.org/t/p/original/";
    return (
      <div>
        <h1>Movies</h1>

        <div className="row justify-content-center align-content-center">
          {this.state.movies.length > 0 ? (
            this.state.movies.map((movie) => (
              <div className="col-md-3 p-0 g-3 m-2 bg-primary rounded">
                <img
                  src={imageURL + movie.backdrop_path}
                  alt=""
                  className="w-100"
                />
                <h5 className="p-2">
                  Movie Name: {movie.name}
                  {movie.title}
                </h5>
              </div>
            ))
          ) : (
            <h1 className="text-center text-danger">Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}
