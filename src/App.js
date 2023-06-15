// import "./App.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Mobile phone",
          qty: 1,
          img: "https://www.sathya.store/img/category/0g4mKAv6EDEpxdUt.jpeg",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile phone",
          qty: 1,
          img: "https://www.sathya.store/img/category/0g4mKAv6EDEpxdUt.jpeg",
          id: 2,
        },
        {
          price: 999,
          title: "Mobile phone",
          qty: 1,
          img: "https://www.sathya.store/img/category/0g4mKAv6EDEpxdUt.jpeg",
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

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => (count += product.qty));
    console.log(count);
    return count;
  };

  getTotalPrice = () => {
    const { products } = this.state;

    let totalPrice = 0;

    products.map(
      (product) => (totalPrice = totalPrice + product.qty * product.price)
    );
    return totalPrice;
  };
  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onHandleDeleteProduct={this.handleDeleteProduct}
        />

        <div>Total: {this.getTotalPrice()}</div>
      </div>
    );
  }
}
