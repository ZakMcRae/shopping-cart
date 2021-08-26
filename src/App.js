import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import HomePage from "./components/home/homepage";
import Products from "./components/products/products";
import ShoppingCart from "./components/shopping-cart/shopping-cart";

function App() {
  const [cart, setCart] = useState({});
  const [itemCount, setItemCount] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (e) => {
    const id = e.target.id;
    setItemCount((prevItemCount) => prevItemCount + 1);

    // if doesn't exist in cart set to 1 otherwise increase 1
    setCart((prevCart) => {
      return { ...prevCart, [id]: prevCart[id] + 1 || 1 };
    });
  };

  const removeFromCart = (e) => {
    const id = e.target.id;
    setItemCount((prevItemCount) => {
      // return null to not display cart count on nav link
      if (prevItemCount === 1) return null;
      else return prevItemCount - 1;
    });

    setCart((prevCart) => {
      // if item has quantity of 1 delete that item from cart
      // don't want item to render in cart with qty 0/undefined
      if (prevCart[id] === 1) {
        const cart = { ...prevCart };
        delete cart[id];
        return cart;
      } else {
        return { ...prevCart, [id]: prevCart[id] - 1 };
      }
    });
  };

  return (
    <Router>
      <Nav setShowCart={setShowCart} count={itemCount} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/products">
          <Products addToCart={addToCart} />
        </Route>
      </Switch>
      {showCart ? (
        <ShoppingCart
          setShowCart={setShowCart}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ) : null}
    </Router>
  );
}

export default App;
