import React, { Component } from "react";

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        {/* <h1>Cart App</h1> */}
        <img
          style={styles.cartIcon}
          src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
          alt="cart"
        />
        <span style={styles.cartCount}>3</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "2px 8px",
    position: "absolute",
    right: 0,
    top: -10,
  },
};

export default Navbar;
