import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../actions/cartActions";

/**
 * Sample products - replace or fetch from API for real app
 */
const PRODUCTS = [
  { id: "p1", title: "Red Pizza", price: 249 },
  { id: "p2", title: "Veg Burger", price: 129 },
  { id: "p3", title: "Chocolate Shake", price: 99 },
  { id: "p4", title: "French Fries", price: 79 }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((s) => s.shop.wishlist);

  const onAddCart = (p) => dispatch(addToCart(p));
  const onAddWishlist = (p) => dispatch(addToWishlist(p));

  const isInWishlist = (id) => wishlist.some((w) => w.id === id);

  return (
    <div className="card">
      <h2>Products</h2>
      <ul className="product-list">
        {PRODUCTS.map((p) => (
          <li key={p.id} className="product">
            <div className="product-info">
              <strong>{p.title}</strong>
              <span>₹{p.price}</span>
            </div>
            <div className="product-actions">
              <button onClick={() => onAddCart(p)}>Add to Cart</button>
              <button
                className={isInWishlist(p.id) ? "muted" : ""}
                onClick={() => onAddWishlist(p)}
              >
                {isInWishlist(p.id) ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
