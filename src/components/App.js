import React, { useState } from "react";
import "../styles/App.css";

const products = [
  {
    id: 1,
    name: "Royal Blue Cotton T-Shirt",
    price: 100,
    image: "https://chriscross.in/cdn/shop/files/ChrisCrossRoyalblueCottontshirtmen.jpg?v=1740994595&width=1000",
  },
  {
    id: 2,
    name: "Black Cotton T-Shirt",
    price: 120,
    image: "https://chriscross.in/cdn/shop/files/ChrisCrossRoyalblueCottontshirtmen.jpg?v=1740994595&width=1000",
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h2>Shopping Cart</h2>

      {/* Product List */}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="custom-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h3>Cart</h3>
        {cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price} x {item.qty}
            </p>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      {/* Wishlist Section */}
      <div className="wishlist">
        <h3>Wishlist</h3>
        {wishlist.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
