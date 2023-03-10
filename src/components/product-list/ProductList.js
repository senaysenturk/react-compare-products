import React from "react";
import Product from "../product/Product";
import style from "./style.module.scss";

const ProductList = () => {
  return (
    <div className={`${style["list"]}`}>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;
