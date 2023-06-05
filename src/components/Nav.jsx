import React, { useContext } from "react";
import "./Nav.css";
import CartContext from "../context/Cart/CartContext";

const Nav = () => {
  const {showCart, cartItems} = useContext(CartContext);
  return (
    <nav>
      <h1>Store</h1>
      <div className="nav__left">
        <div className="nav__middle">
          <div className="input__wrapper">
            <input type="text" />
            <i className="fas fa-search"></i>
          </div>
        </div>
          </div>
          <div className="nav__right">
              <div className="cart__icon">
          <i className="fa fa-shopping-cart" area-hidden='true' />
          {cartItems.length > 0 && <div className="item__count"><span>{cartItems.length}</span></div> }
              </div>
          </div>
    </nav>
  );
};

export default Nav;
