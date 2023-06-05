import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/Cart/CartContext";
const CartItem = ({ item }) => {
  const { removeItemCart } = useContext(CartContext);
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      <div>
        {item.name} ${item.price}
      </div>
      <button className="CartItem__button" onClick={removeItemCart(item._id)}>
        Remove cart
      </button>
    </li>
  );
};

export default CartItem;
