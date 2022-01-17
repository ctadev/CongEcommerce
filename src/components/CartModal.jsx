import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "./redux/modalSlice";
import { removeItem, decreaseCart, addCart, getTotal } from "./redux/cart";
import StripeCheckoutButton from "./stripeButton";

function CartModal() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.modalSlice);
  const cart = useSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const cartToggle = (event) => {
    const element = event.target;
    if (element.classList.contains("cart-container")) {
      document.body.style.overflow = "auto";
      dispatch(toggleModal());
    }
  };

  const exit = () => {
    dispatch(toggleModal());
    document.body.style.overflow = "auto";
  };

  return (
    <main
      className={toggle ? "cart-container" : "cart-container hide"}
      onClick={cartToggle}
    >
      {cart.cartItem.length === 0 ? (
        <div className="empty">
          <h1>Cart is Empty</h1>
          <button onClick={() => exit()} className="closeButton">
            X
          </button>
        </div>
      ) : (
        <div className="container">
          <h1>Your Bags[{cart.cartTotalQuantity}]</h1>
          <button onClick={() => exit()} className="closeButton">
            X
          </button>
          <section className="orders-container">
            {cart.cartItem?.map((item) => (
              <div className="cards" key={item.id}>
                <h2>{item.title}</h2>
                <img alt={item.title} src={item.image}></img>
                <p>${Math.round(item.price * item.cartQuantity * 100) / 100}</p>
                <div className="quantity-container">
                  <button onClick={() => dispatch(decreaseCart(item))}>
                    -
                  </button>
                  <p>{item.cartQuantity}</p>
                  <button onClick={() => dispatch(addCart(item))}>+</button>
                </div>
                <button onClick={() => dispatch(removeItem(item))}>
                  Remove
                </button>
              </div>
            ))}
          </section>
          <section className="orders-receipt">
            <h2>Subtotal: ${Math.round(cart.cartTotal * 100) / 100}</h2>
              <StripeCheckoutButton price={Math.round(cart.cartTotal * 100) / 100}/>
          </section>
        </div>
      )}
    </main>
  );
}

export default CartModal;
