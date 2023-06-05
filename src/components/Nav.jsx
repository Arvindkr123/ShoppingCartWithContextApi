import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
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
                  <i className="fa fa-shopping-cart" area-hidden='true'/>
              </div>
          </div>
    </nav>
  );
};

export default Nav;
