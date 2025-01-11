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
        number: 22935,
        onSale: true,
      },
      {
        id: 2,
        name: "Nokia",
        model: "Fd2",
        category: "mobile",
        count: 0,
        number: 27635,
        onSale: false,
      },
      {
        id: 3,
        name: "Iphone 14",
        model: "Ds32",
        category: "mobile",
        count: 0,
        number: 23535,
        onSale: true,
      },
      {
        id: 4,
        name: "Oppo",
        model: "Y42",
        category: "mobile",
        count: 0,
        number: 22335,
        onSale: true,
      },
      {
        id: 5,
        name: "Infinex",
        model: "R2",
        category: "mobile",
        count: 0,
        number: 25635,
        onSale: false,
      },
      {
        id: 6,
        name: "Xaomi",
        model: "Tw5",
        category: "mobile",
        count: 0,
        number: 27835,
        onSale: false,
      },
      {
        id: 7,
        name: "Redmi",
        model: "A2",
        category: "mobile",
        count: 0,
        number: 21335,
        onSale: true,
      },
    ],
  };

  doubleProduct = (product) => {
    let newProducts = [...this.state.products];
    let index = newProducts.indexOf(product);
    newProducts.splice(index + 1, 0, newProducts[index]);
    this.setState({ products: newProducts });
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

  componentDidUpdate(props, state){
    console.log(state)
  }

  render() {

    return (
      <>
        <div className="min-vh-100 container bg-dark text-dark p-4">
          <div className="row g-3 mt-3">
            {this.state.products.map((product, index) => (
              <Child
                key={index}
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
