import React from "react";

function Product({ product }) {
  return <div>{product.map((item) => item.title)}</div>;
}

export default Product;
