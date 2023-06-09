import React, { Component } from "react";

export default class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile phone",
      qty: 1,
      img: "",
    };
  }

  increaseQuantity = () => {
    //first approach -  shallow merging
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    // if previous state is required then use this method
    this.setState((prevState) => {
      return { qty: prevState.qty + 1 };
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return { qty: prevState.qty - 1 };
    });
  };

  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;

    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/484/484611.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    // borderStyle: "solid",
    borderRadius: 5,
    background: "#ccc",
  },
};
