import React from "react";
import ProductList from "../../components/product-list/ProductList";
import style from "./style.module.scss";

const Home = () => {
  return (
    <>
      <div className={`${style["header"]}`}>
        <h1>Compare List</h1>
      </div>
      <div className={`${style["container"]}`}>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
