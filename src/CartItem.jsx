import React, { Component } from "react";

export default class CartItem extends Component {
// 


  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity,onHandleDeleteProduct} = this.props;

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
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/484/484611.png"
              onClick={() => onHandleDeleteProduct(product.id)}
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
