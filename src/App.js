import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import HomePage from "./components/home/homepage";
import Products from "./components/products/products";
import ShoppingCart from "./components/shopping-cart/shopping-cart";

function App() {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const addToCart = (e) => {
    const id = e.target.id;

    // if doesn't exist in card set to 1 otherwise increase 1
    setCart((prevCart) => {
      return { ...prevCart, [id]: prevCart[id] + 1 || 1 };
    });
  };

  return (
    <Router>
      <Nav setShowCart={setShowCart} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/products">
          <Products addToCart={addToCart} />
        </Route>
      </Switch>
      {showCart ? <ShoppingCart setShowCart={setShowCart} /> : null}
    </Router>
  );
}

export default App;
