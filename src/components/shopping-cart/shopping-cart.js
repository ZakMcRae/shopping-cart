import { useEffect, useState } from "react";
import "./shopping-cart.css";
import CartCard from "./cart-card";
const toolInfo = require("../products/tools.json");

const ShoppingCart = (props) => {
  const [orderTotal, setOrderTotal] = useState(null);
  const { cart, setShowCart } = props;

  // keep track of order total when cart updates
  useEffect(() => {
    const cartTotals = Object.keys(cart).map((item) => {
      const unitPrice = toolInfo.filter((tool) => tool.id === item)[0].price;
      const quantity = cart[item];

      return unitPrice * quantity;
    });

    if (!(cartTotals.length === 0)) {
      setOrderTotal(cartTotals.reduce((a, b) => a + b));
    } else setOrderTotal(null);
  }, [cart]);

  return (
    <div className="shopping-cart">
      <h3>Cart</h3>
      <button
        onClick={() => {
          setShowCart(false);
        }}
      >
        X
      </button>
      <div className="cart-items">
        {Object.keys(cart).map((item) => {
          return item ? (
            <CartCard
              key={item}
              partNumber={item}
              quantity={cart[item]}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
            />
          ) : null;
        })}
      </div>
      <div className="order-total">
        {orderTotal ? (
          <p>Total: {orderTotal.toFixed(2)}</p>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
