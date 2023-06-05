import React from "react";
import "./ProductCard.css";
import formatCurrency from 'format-currency'

const ProductCard = ({ product }) => {
  return (
    <div className="productCard__wrapper">
      <div>
          <img className="productCard__img" src={product.image} alt="" /> 
          </div>
          <h4>{product.name}</h4>
          <div className="productCard__price">
              <h5>$ {product.price}</h5>
          </div>
    </div>
  );
};

export default ProductCard;
