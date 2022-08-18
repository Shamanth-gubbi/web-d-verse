import React from "react";
import Header from "./Header";

export default function Cart() {
  return (
    <div>
      <Header />
    <div classname="carts">
      <img src="/cart.png" alt="your cart is empty"></img>
      <div>
        <h1>your cart is empty</h1>
      </div>
    </div>
    </div>
  );
}
