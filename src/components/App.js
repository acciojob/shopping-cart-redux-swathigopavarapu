import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Coupon from "./Coupon";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
      </header>

      <main className="main-grid">
        <section className="left">
          <ProductList />
        </section>

        <section className="center">
          <Cart />
          <Coupon />
        </section>

        <section className="right">
          <Wishlist />
        </section>
      </main>
    </div>
  );
};

export default App;
