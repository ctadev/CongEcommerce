import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./redux/modalSlice";
import { products, category } from "./redux/apiSlice";
import { Link } from "react-router-dom";

function Nav() {
  const cart = useSelector((state) => state.modalSlice);
  const quantity = useSelector((state) => state.cartSlice);
  const [toggle, setToggle] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const cartToggle = () => {
    dispatch(toggleModal());
    if (cart === true) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const productsList = () => {
    setToggle(!toggle);
    dispatch(products());
  };

  const mens = () => {
    setToggle(!toggle);
    setToggleDropdown(!toggleDropdown);
    dispatch(category("men's clothing"));
  };

  const womens = () => {
    setToggle(!toggle);
    setToggleDropdown(!toggleDropdown);
    dispatch(category("women's clothing"));
  };

  const electronics = () => {
    setToggle(!toggle);
    setToggleDropdown(!toggleDropdown);
    dispatch(category("electronics"));
  };

  const dispatch = useDispatch();

  return (
    <nav id="nav">
      <section className="logo">
        <Link to="/" className="logo-link">
          <h1>Shopiies</h1>
        </Link>
      </section>
      <section className="hamburger">
        <div className="icon" onClick={() => setToggle(!toggle)}>
          <i className={toggle ? "fas fa-bars" : "fas fa-times"}></i>
        </div>
        <div className={toggle ? "links" : "links show"}>
          <a href="#home" onClick={() => setToggle(!toggle)}>
            Home
          </a>
          <a
            className="dropdown"
            onClick={() => productsList()}
            href="#products"
          >
            Products
          </a>
          <div
            className="category"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            Category
            <span className="dd-icon">
              <i className="fas fa-caret-down"></i>
            </span>
            <div className={toggleDropdown ? "submenu" : "submenu show"}>
              <a onClick={() => mens()} href="#products">
                Mens
              </a>
              <a onClick={() => womens()} href="#products">
                Womens
              </a>
              <a onClick={() => electronics()} href="#products">
                Electronics
              </a>
            </div>
          </div>
          <Link to="/contact" className="contact-link">
            <p>Contact</p>
          </Link>
        </div>
      </section>
      <section className="cart">
        <button onClick={() => cartToggle()}>
          <i className="fas fa-shopping-cart"></i>
          <span>{quantity.cartTotalQuantity}</span>
        </button>
      </section>
    </nav>
  );
}

export default Nav;
