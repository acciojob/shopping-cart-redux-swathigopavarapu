import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/App.css"

const IMAGE_URL =
  "https://chriscross.in/cdn/shop/files/ChrisCrossRoyalblueCottontshirtmen.jpg?v=1740994595&width=1000";

const PRODUCTS = [
  { id: "p1", title: "Blue Shirt", price: 499, image: IMAGE_URL },
  { id: "p2", title: "Jeans", price: 899, image: IMAGE_URL },
  { id: "p3", title: "Sneakers", price: 1299, image: IMAGE_URL },
  { id: "p4", title: "Cap", price: 299, image: IMAGE_URL },
];

export default function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: id });
  };

  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="text-center w-100">
          <h2>Shopping Cart</h2>
        </div>
      </nav>

      {/* Product List */}
      <div className="container mt-4">
        <h3>Products</h3>
        <div className="row">
          {PRODUCTS.map((p) => (
            <div className="col-md-4" key={p.id}>
              <div className="custom-card card">
                <img src={p.image} alt={p.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">Price: ₹{p.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(p)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => addToWishlist(p)}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <h3 className="mt-4">Cart</h3>
        {cart.map((item) => (
          <div key={item.id} className="d-flex align-items-center mb-2">
            <span className="me-2">{item.title}</span>
            <span className="me-2">Qty: {item.qty}</span>
            <button
              className="btn btn-sm btn-success me-1"
              onClick={() => increaseQty(item.id)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-warning me-1"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Wishlist Section */}
        <h3 className="mt-4">Wishlist</h3>
        {wishlist.map((item) => (
          <div key={item.id} className="d-flex align-items-center mb-2">
            <span className="me-2">{item.title}</span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
