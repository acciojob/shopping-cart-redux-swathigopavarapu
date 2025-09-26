import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, addToCart } from "../actions/cartActions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((s) => s.shop.wishlist);

  const moveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div className="card">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <ul className="wishlist-list">
          {wishlist.map((w) => (
            <li key={w.id} className="wishlist-item">
              <div>
                <strong>{w.title}</strong>
                <div>₹{w.price}</div>
              </div>
              <div>
                <button onClick={() => moveToCart(w)}>Add to Cart</button>
                <button onClick={() => dispatch(removeFromWishlist(w.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
