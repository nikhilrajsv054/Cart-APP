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

  handleIncreaseQuantity = (product) => {
    console.log("Hey ples inc qty");
    const { products } = this.state;

    const index = products.indexOf(product);
    console.log(index);

    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("Hey ples inc qty");
    const { products } = this.state;

    const index = products.indexOf(product);
    console.log(index);

    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const {products} = this.state;
    
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })

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
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onHandleDeleteProduct = {this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}
