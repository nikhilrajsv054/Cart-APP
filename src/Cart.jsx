import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  
    const { products } = props;
    return (
      <div className="cartContainer">
        {products.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onHandleDeleteProduct = {props.onHandleDeleteProduct}
            />
          );
        })}
      </div>
    );
  
}

export default Cart;
