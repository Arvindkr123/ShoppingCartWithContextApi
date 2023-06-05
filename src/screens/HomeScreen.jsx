import React from "react";
import "./HomeScreen.css";
import products from "../data.jsx";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => {
        return <ProductCard product={product} key={product._id} />;
      })}
    </div>
  );
};

export default HomeScreen;
