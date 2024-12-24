import axios from "axios";
import React, { Component } from "react";

export default class News extends Component {
  state = {
    articles: [],
  };

  getApi = async () => {
    let response = await axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2024-12-22&to=2024-12-22&sortBy=popularity&apiKey=9d73f6ecf52f4041bff00401dab52be0"
    );
    this.setState({ articles: response.data.articles });
  };

  componentDidMount() {
    this.getApi();
  }

  render() {
    console.log(this.state.articles);
    return (
      <div className="row justify-content-center">
        <h1>News</h1>
        {this.state.articles.map((article) => (
          <div className="col-3 bg-info-subtle g-2 p-1 m-1 border rounded">
            <img src={article.urlToImage!== null?article.urlToImage:'https://www.createagile.com/blog/wp-content/uploads/2020/11/what-is-alt-text.png'} alt="" className="w-100" />
            <h6>{article.title}</h6>
            <p >{article.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
