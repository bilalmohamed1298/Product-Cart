import React, { Component } from "react";

export default class Child extends Component {
  render() {

    let {id,name,model,category,number,count,onSale} = this.props.productInfo

    return <>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="bg-white position-relative p-3 rounded-1">
        <h2 className="text-center">Product {id}</h2>
        <h6><b>Product Name:</b> {name}</h6>
        <h6><b>Product Model:</b>  {model}</h6>
        <h6><b>Product Category:</b>  {category}</h6>
        <h6><b>Product Naumber:</b>  {number}</h6>
        <h6><b>Product Count:</b>  {count}</h6>
        {onSale === true ?<div className="sale bg-danger p-2 mx-2 text-white position-absolute top-0 end-0 " >Sale</div>:""}
        <button onClick={()=>this.props.double(this.props.productInfo)} className="btn btn-outline-danger w-50">Double</button>
        <button onClick={()=>this.props.plus(this.props.productInfo)} className="btn btn-outline-danger w-50">Count+</button>
        <button onClick={()=>this.props.delete(id)} className="btn btn-outline-danger w-100">Delete</button>
        </div>
      
      </div>
    </>
  }
}
