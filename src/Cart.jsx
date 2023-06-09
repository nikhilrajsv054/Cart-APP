import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Mobile phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Mobile phone",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cartContainer">
        {products.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              func={() => console.log("sdsd")}
              isloggedin={false}
              jsx={<h1>Test</h1>}
            />
          );
        })}
      </div>
    );
  }
}
