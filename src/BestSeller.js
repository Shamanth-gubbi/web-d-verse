import React from "react";
import Product from "./Product";
import Header from "./Header";

export default function BestSeller() {
  return (
    <div>
      <Header />
      <Product
        id={123}
        title="Pickels"
        price={69}
        rating={4}
        image="/images/pickels.jpg"
      />
    </div>
  );
}
