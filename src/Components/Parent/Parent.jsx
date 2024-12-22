import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Samsung",
        model: "D432",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: true,
      },
      {
        id: 2,
        name: "Nokia",
        model: "D432",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: false,
      },
      {
        id: 3,
        name: "Iphone 14",
        model: "D432",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: true,
      },
      {
        id: 4,
        name: "Oppo",
        model: "D432",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: true,
      },
      {
        id: 5,
        name: "Infinex",
        model: "D432",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: false,
      },
      {
        id: 6,
        name: "Xaomi",
        model: "D432",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: false,
      },
      {
        id: 7,
        name: "Redmi",
        model: "D432",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: true,
      },
    ],
  };


  plus = (product) => {
    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(product);
    console.log(index);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  delete = (id) => {
    let products = [...this.state.products];
    products = products.filter((product) => product.id !== id);
    this.setState({ products });
  };

  render() {
    console.log("Render");
    console.log(this.state.products);
    return (
      <>
        <div className="container bg-dark text-dark p-3">
          <div className="row g-3">
            {this.state.products.map((product) => (
              <Child
                key={product.id}
                plus={this.plus}
                delete={this.delete}
                double={this.doubleProduct}
                productInfo={product}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
