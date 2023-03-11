import React from "react";
import style from "./style.module.scss";

const Product = () => {
  return (
    <>
      <div className={`${style["product-card"]}`}>
        <div className={`${style["product-img"]}`}>
          <img
            src="https://st3.myideasoft.com/idea/hb/67/myassets/products/605/1-min-1.jpg?revision=1678123486"
            alt=""
          />
        </div>
        <div className={`${style["image-overlay"]}`} />
        <div className={`${style["view-details"]}`} onClick={""}>
          Compare
        </div>
        <div className={`${style["product-detail"]}`}>
          <span className={`${style["product-brand"]}`}>iPhone</span>
          <p className={`${style["product-name"]}`}>14 Pro Max - 256GB</p>
          <span className={`${style["product-price"]}`}>1.570,00 USD</span>
        </div>
      </div>
    </>
  );
};

export default Product;
