import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  addToWishlist
} from "../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, coupon } = useSelector((s) => s.shop);

  const subtotal = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  const discount = coupon ? Math.round((subtotal * coupon.discountPercent) / 100) : 0;
  const total = subtotal - discount;

  return (
    <div className="card">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((p) => (
              <li key={p.id} className="cart-item">
                <div>
                  <strong>{p.title}</strong>
                  <div>₹{p.price} × {p.qty} = ₹{p.price * p.qty}</div>
                </div>
                <div className="cart-controls">
                  <button onClick={() => dispatch(increaseQty(p.id))}>+</button>
                  <button onClick={() => dispatch(decreaseQty(p.id))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(p.id))}>Remove</button>
                  <button onClick={() => dispatch(addToWishlist({ id: p.id, title: p.title, price: p.price }))}>Move to Wishlist</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="summary">
            <div>Subtotal: <strong>₹{subtotal}</strong></div>
            <div>Discount: <strong>-₹{discount}</strong></div>
            <div className="total">Total: <strong>₹{total}</strong></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
